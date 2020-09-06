import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/viewmodels/SignwithEmailScreenViewModel.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:hostapp/src/locator.dart';

class SignwithEmailScreen extends StatefulWidget {
  @override
  _SignwithEmailScreenState createState() => _SignwithEmailScreenState();
}

class _SignwithEmailScreenState extends State<SignwithEmailScreen> {
  
    final CustomFuntion _customFuntion = locator<CustomFuntion>();
   TextEditingController emailcontroller = new TextEditingController();

  @override
  Widget build(BuildContext context) {
  return ViewModelProvider<SignwithEmailScreenViewModel>.withConsumer(
       viewModelBuilder: () => SignwithEmailScreenViewModel(),
      builder: (context, model, child) =>
     Scaffold(
      body: SingleChildScrollView(
        child: Column(children: <Widget>[
          SizedBox(height: 15,),
           Padding(
             padding: const EdgeInsets.all(8.0),
             child: Image.asset(AppImage.header,),
           ),
Center(child: Container(
                    child: Text(
                      "Enter your email",
                      style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                          fontSize: 24.0),
                    ),
                  ),
                ),
                 verticalSpaceTiny,
                Center(
                  child: SizedBox(
                    child: Text(
                      "We will send you a magic sign-in link",
                      style: TextStyle(
                        color: Color(0xff8F8F8F),
                        fontSize: 14.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),
                 SizedBox(height: 15,),
                 _customFuntion.errorUimessage(errorMessage: model.errorM,
                 type: 0),
               // Center(child:Text(),),
                 verticalSpaceLarge,

           Padding(
             padding: const EdgeInsets.only(left: 20.0, right: 20.0),
             child: TextFormField(
                //textAlignVertical: TextAlignVertical.center,
                      controller: emailcontroller,
                      textInputAction: TextInputAction.done,
                      keyboardType:TextInputType.emailAddress,
                      decoration:  InputDecoration(
                        hintText: 'Email',
                         contentPadding: EdgeInsets.all(10.0),
                        enabledBorder: new OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                        borderSide: new BorderSide(color: AppColor.rimary,
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
           ),

                   verticalSpaceMedium, //Enable space btw
                    Container(
                  width: 318.0,
                  height: 47.0,
                  decoration: new BoxDecoration(
                    borderRadius: new BorderRadius.circular(
                      13.0,
                    ),
                  ),
                  child: RaisedButton(
                    color: const Color(0xffF1F1F1),
                    child: new Row(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                         Image.asset(AppImage.email,),
                          horizontalSpaceTiny,
                            Text('Send Magic Link',
                            style: TextStyle(
                                color: AppColor.black,
                                fontSize: 17.0,
                                fontWeight: FontWeight.bold
                            ),),
                      ],
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(12))),
                    onPressed: () async {
                    model.signIn(emailcontroller.text);
                    },
                  ),
                ),
     
                   verticalSpaceMedium,

                FlatButton(
                    onPressed: () {
                      _customFuntion.havingProblemCondition();
                    },
                    child: const Text(
                      'Having problems click here',
                      style: TextStyle(
                        color: Color(0xff8F8F8F),
                        fontSize: 12.0,
                        fontWeight: FontWeight.w600,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),

                  FlatButton(
                    onPressed: () {
                      _customFuntion.getTermconditions();
                    },
                    child: const Text(
                      'Terms & Conditions',
                      style: TextStyle(
                        color: Color(0xff8F8F8F),
                        fontSize: 12.0,
                        fontWeight: FontWeight.w600,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
        ],),
      )
    )
      );
  }
}