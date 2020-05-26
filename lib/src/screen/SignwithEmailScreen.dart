import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/viewmodels/SignwithEmailScreenViewModel.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';

class SignwithEmailScreen extends StatefulWidget {
  @override
  _SignwithEmailScreenState createState() => _SignwithEmailScreenState();
}

class _SignwithEmailScreenState extends State<SignwithEmailScreen> {
  
   TextEditingController emailcontroller = new TextEditingController();
  @override
  Widget build(BuildContext context) {
  return ViewModelProvider<SignwithEmailScreenViewModel>.withConsumer(
      viewModel: SignwithEmailScreenViewModel(),
      builder: (context, model, child) =>
     Scaffold(
      body: SingleChildScrollView(
        child: Column(children: <Widget>[
            verticalSpaceLarge, //Enable space btw
              verticalSpaceLarge, //Enable space btw
                verticalSpaceLarge, //Enable space btw

                Center(child:Text(model.errorM == null ? '' : model.errorM),),

           InputField(
                    placeholder: '',
                    controller: emailcontroller,
                    textInputType: TextInputType.emailAddress,
                    decoration:  InputDecoration(
                  hintText: 'Email',
                  enabledBorder: new OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8.0),
                  borderSide: new BorderSide(color: AppColor.black,
                  ),
                                ),
                          border: new OutlineInputBorder(
                              borderRadius: BorderRadius.circular(8.0),
                              borderSide: new BorderSide(color: AppColor.black
                              ),
                        ),
                          suffixIcon: (model.errorType == 0 ? SizedBox.shrink() : Icon(Icons.warning, color: Colors.red,))
                        ),
                    onChanged: (value){
                    },
                  ),

                   verticalSpaceLarge, //Enable space btw

           GestureDetector(
                  child: Padding(
                    padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                    child: Container(
                      height: 50,
                      child: Material(
                        child: Center(
                          child: Row(children: <Widget>[
                            Icon(Icons.email, color: Colors.black),
                            Text('Send Magic Link',
                            style: TextStyle(
                                color: AppColor.black,
                                fontSize: 17.0,
                                fontWeight: FontWeight.bold
                            ),),
                          ],)
                        ),
                        color: Color(0xFFD24E4E),
                        shape: RoundedRectangleBorder(
                            borderRadius: new BorderRadius.circular(18.0),
                            side: BorderSide(color: AppColor.borderColor)
                        ),

                      ),
                    ),
                  ),
                  onTap: (){
                    model.signIn(emailcontroller.text);
                   
                  },
                )
        ],),
      )
    )
      );
  }
}