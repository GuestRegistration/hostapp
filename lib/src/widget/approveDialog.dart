import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/GuestScreen.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';

class ApproveDialog extends StatefulWidget {
  @override
  _ApproveDialogState createState() => _ApproveDialogState();
}

class _ApproveDialogState extends State<ApproveDialog> {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Dialog(
           elevation: 0,
          backgroundColor: Colors.transparent,
          child: Container(
           // height: MediaQuery.of(context).size.height /4, //Not using this anymore, Am using  mainAxisSize: MainAxisSize.min,
            child: Card(
                  elevation: 10,
                  shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.only(
                    bottomRight: Radius.circular(20),
                    bottomLeft: Radius.circular(20),
                    topLeft:Radius.circular(20),
                    topRight: Radius.circular(20))
),
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                              children: <Widget>[
                                  Padding(
                                  padding: const EdgeInsets.only(top: 10.0),
                                  child: Column(children: <Widget>[
                                    Padding(
                                      padding: const EdgeInsets.only(top: 10.0, right: 10, left: 10,),
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: <Widget>[
                                        Text('Are you sure?', style:  TextStyle(
                                          color: AppColor.black,
                                          fontSize: AppFontSizes.medium,
                                          fontWeight: FontWeight.bold
                                        )),
                                        SizedBox(height: 10,),
                                      Text('You are accessing sensitive personal data a log of this will be sent to the guest',
                                      style: TextStyle(
                                        color: Colors.grey,
                                        fontSize: AppFontSizes.medium,
                                        fontWeight: FontWeight.bold
                                      )),
                                      ],),
                                    ),
                                    SizedBox(height: 10,),
                                    Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Expanded(
                    child: GestureDetector(
                child: Padding(
                  padding: const EdgeInsets.all(1.0),
                  child: Container(
                    width: 100,
                    height: 50,
                    child: Material(
                    child: Center(
                          child: Text('NO',
                          style: TextStyle(
                            color: AppColor.kErrorRed,
                            fontSize: 17.0,
                            fontWeight: FontWeight.bold
                          ),),
                    ),
                    color: Color(0xFFffebee),
                    shape: RoundedRectangleBorder(
  borderRadius: new BorderRadius.circular(5.0),
        side: BorderSide(color: AppColor.white)
),
                  
                    ),
                        ),
                      ),
                      onTap: (){
                        Navigator.of(context).pop();
                      
                      } ),
                            ),
                      Expanded(
                       child: GestureDetector(
                           child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Container(
                                width: 100,
                                height: 50,
                                child: Material(
                                child: Center(
                                  child: Text('YES', //If all field is entered, Display complete else Skip
                                  style: TextStyle(
                                    color: AppColor.primary,
                                    fontSize: 17.0,
                                    fontWeight: FontWeight.bold
                                  ),),
                                ),
                                color:  Color(0xFFe3f2fd),
                                shape: RoundedRectangleBorder(
                                borderRadius: new BorderRadius.circular(5.0),
                                    side: BorderSide(color: AppColor.white)
                        ),
                             
                    ),
                            ),
                          ),
                          onTap: (){
                      
                    Navigator.push( context,
                   MaterialPageRoute(builder: (context) =>
                    GuestScreen())).then((value) => 
                    Navigator.of(context).pop()); 
                     // Navigator.of(context).popUntil((route) => false);
                              
                          }
                        ),
                      ),
                          ],
                        ) ],)
                        ),
                              ],
                              )
                      ),
          ),

        ),
        
      );
  }
}