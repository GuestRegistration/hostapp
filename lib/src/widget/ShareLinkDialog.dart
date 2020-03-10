import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/util/customFunctions.dart';

class ShareLinkDialog extends StatefulWidget {
  final String link;

  const ShareLinkDialog({this.link});

  @override
  _ShareLinkDialogState createState() => _ShareLinkDialogState();
}

class _ShareLinkDialogState extends State<ShareLinkDialog> {
   TextEditingController linkController = new TextEditingController();
   final CustomFuntion _customFuntion = locator<CustomFuntion>();
   final NavigationService _navigationService = locator<NavigationService>(); 

   @override
  void initState() {
    // TODO: implement initState
    super.initState();
    linkController.text = widget.link;
  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Dialog(
        insetAnimationCurve: Curves.elasticInOut,
        elevation: 0,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20.0)),
        backgroundColor: Color(0xFFF7FCFE),
        child: Container(
          width: MediaQuery.of(context).size.width,
             // color:  Color(0xFFF7FCFE),
          decoration: new BoxDecoration(
        shape: BoxShape.rectangle,
        borderRadius:
            new BorderRadius.all(new Radius.circular(40.0)),
        ),
          child: SingleChildScrollView(
            child: GestureDetector(
                  child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: <Widget>[
                      Row(children: <Widget>[
                         Padding(
                        padding: const EdgeInsets.only(top: 10.0, left: 10),
                        child: Text('Check-in Link', style:
                          TextStyle(
                color: AppColor.black,
                fontSize: AppFontSizes.large,
                fontWeight: FontWeight.bold
              )
          ), ),
                      ],),
                      Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: AbsorbPointer(
                            child: InputField(
                            placeholder: 'PropertyAddress',
                            decoration: null,
                            isReadOnly: false,
                            controller: linkController,
                          ),
                        ),
                      ),
                     
                      // SizedBox(height: 10,),
                    // Row(
                    //   mainAxisAlignment: MainAxisAlignment.center,
                    //   children: <Widget>[
                    //     Material(
                    //       elevation: 30,
                    //       shadowColor: AppColor.notWhite,
                    //       shape: RoundedRectangleBorder(
                    //           borderRadius: BorderRadius.circular(2.0)),
                    //       child: Padding(
                    //         padding: const EdgeInsets.all(10.0),
                    //         child: Expanded(
                    //               child: 
                    //         ),
                    //       ),
                    //     ),
                    //     SizedBox(width: 10,),
                    //   ],
                    // ),
                       SizedBox(height: 5,),
                     GestureDetector(
                    child: Padding(
                      padding: const EdgeInsets.only(left: 6.0, right:6.0, bottom: 20),
                      child: Container(
                        height: 50,
                        child: Material(
                          child: Center(
                            child: Text('Share',
                              style: TextStyle(
                                  color: AppColor.primary,
                                  fontSize: 17.0,
                                  fontWeight: FontWeight.bold
                              ),),
                          ),
                          color: Color(0xFFF7FCFE),
                          shape: RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(18.0),
                              side: BorderSide(color: Color(0xFFF7FCFE))
                          ),

                        ),
                      ),
                    ),
                    onTap: (){
                      _customFuntion.shareReservationLink(link: widget.link);

                       //Show index 1 when lauching dashborad
                        Navigator.pushReplacement( context,
                   MaterialPageRoute(builder: (context) => Dashboard(
showIndex: 0,
                   )));
                      Navigator.pop(context);
                    },
                  ),
                      
                    ],
                  ),
                ),
            ),
          ),
        ),
      ),
    );
  }
}