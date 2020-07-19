import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppText.dart';
import 'package:hostapp/src/viewmodels/loadingViewModel/addpropertyloadingViewmodel.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';


class UpdatePropertyWidget extends StatefulWidget {
  final List<String> data;

  const UpdatePropertyWidget({this.data});
  @override
  _UpdatePropertyWidgetState createState() => _UpdatePropertyWidgetState();
}

class _UpdatePropertyWidgetState extends State<UpdatePropertyWidget> {
  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<CRUDpropertyloadingViewmodel>.withConsumer(
       viewModelBuilder: () => CRUDpropertyloadingViewmodel(),
      onModelReady: (model) => model.updatePropertyAPI(data: widget.data),
      builder: (context, model, child) =>
          Scaffold(
        body:  Center(
            child: (model.getErrorMessage == null || model.busy ? Column(
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
                  child: Text(AppText.addPHoldOnUpdateProperty,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.grey,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
              ],
            )
            : errorWidget(model, widget.data))
          )
      ),
    );
  }

  errorWidget(CRUDpropertyloadingViewmodel model, List<String> data){
    return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
               Container(
                  height: 60,
                  width: 60,
                  child: CircularProgressIndicator(
                  strokeWidth: 1,
                        valueColor: AlwaysStoppedAnimation<Color>(AppColor.borderColor,),
                        backgroundColor: AppColor.borderColor,
                  ),
                ),
                SizedBox(height: 30,),
                Center(
                  child: Text(model.getErrorMessage,
                   textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.red,
                  fontSize: AppFontSizes.medium,
                  fontWeight: FontWeight.bold
                            ),),
                           
                ),
                verticalSpaceLarge,
                GestureDetector(child: Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: Material(
                      child: Center(
                          child: Text('Retry',
                          style: TextStyle(
                            color: AppColor.white,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                      ),
                      color: Color(0xFF45A1C9),
                      shape: RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: AppColor.borderColor)
    ),
                   
                ),
                    ),
                  ),
                  onTap: (){
                    model.updatePropertyAPI(data: widget.data);
                  },
                        ),
              ],
            );
  }
  
 }