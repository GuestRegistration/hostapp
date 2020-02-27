import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/viewmodels/AddpropertyloadingViewmodel.dart';
import 'package:provider_architecture/provider_architecture.dart';


class AddProprtyLoadingScreen extends StatefulWidget {
  final List<String> data;

  const AddProprtyLoadingScreen({this.data});

  @override
  _AddProprtyLoadingScreenState createState() => _AddProprtyLoadingScreenState();
}

class _AddProprtyLoadingScreenState extends State<AddProprtyLoadingScreen> {

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<AddpropertyloadingViewmodel>.withConsumer(
      viewModel: AddpropertyloadingViewmodel(),
      onModelReady: (model) => model.addPropertyAPI(
        data: widget.data),

      builder: (context, model, child) =>
          Scaffold(
        body:  Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 8,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(AppText.addPHoldOn,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.grey,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
              ],
            ),
          )
      ),
    );
  }
  

 }