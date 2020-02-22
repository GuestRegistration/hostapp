import 'package:flutter/material.dart';

class Termconditions extends StatefulWidget {
  final String email;

  // List list;
  Termconditions({this.email});
  @override
  _TermconditionsState createState() => new _TermconditionsState();
}

class _TermconditionsState extends State<Termconditions> {
  var email;

  void initState() {
    super.initState();
  }

  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomPadding: false,
      body: new Container(
          child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SizedBox(height: 50.0),
            SizedBox(
          width: 90.0,
           height: 32.0,
          child: Container(
            //alignment: Alignment.topRight,

                decoration: new BoxDecoration(
                          color: Color(0xffE7F8FF),
                          //border: Border.all(color: Color(0xffC6DEE9)),
                          borderRadius: new BorderRadius.circular(10.0)),
            
            child: FlatButton(
            
              child: new Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                //mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  SizedBox(
                    width: 10.0,
                    height: 14.0,
                     child: Icon(
                      Icons.arrow_back_ios,
                      color: Color(0xff45A1C9),
                      size: 18.0,
                    ),
                  ),
                    SizedBox(
                    width: 7.5,),
                  const Text(
                    'Back',textAlign: TextAlign.right,
                    style: TextStyle(
                      color: Color(0xff45A1C9),
                      fontSize: 14.0,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ),
            ),
            SizedBox(height: 25.0),
            Center(
              child: Text(
          "Terms & Conditions",
          style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 30.0),
              ),
            ),
            SizedBox(height: 50.0),
            Center(
              child: SizedBox(
          //width: 324.0,
          //height: 549.0,
          child: Align(
              //alignment: Alignment(0, 10),
              child: Center(
                child: Container(
                  //padding: ,
                             margin: const EdgeInsets.only(left: 20.0, right: 20.0),
                  child: Column(
                    children: <Widget>[
                      Text(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                          style:
                              TextStyle(color: Colors.black, fontSize: 16.0)),
                      SizedBox(height: 10.0),
                      Text(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                          style:
                              TextStyle(color: Colors.black, fontSize: 16.0)),
                      SizedBox(height: 10.0),
                      Text(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
                        style: TextStyle(color: Colors.black, fontSize: 16.0),
                      ),
                    ],
                  ),
                ),
              ),
          ),
              ),
            ),
          ],
        ),
      )),
    );
  }
}
