import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/auth_screen.dart';

class Termconditions extends StatefulWidget {
  // List list;
  //Termconditions({this.email});
  @override
  _TermconditionsState createState() => new _TermconditionsState();
}

class _TermconditionsState extends State<Termconditions> {
  void initState() {
    super.initState();
  }

  void dispose() {
    super.dispose();
  }

  Future getTermconditions() async {
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;
    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      result = remoteConfig.getString('TermsConditions');
    } on FetchThrottledException catch (exception) {
      print(exception);
    } catch (exception) {
      print("unable to fetch remote config");
    }
    return result;
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: getTermconditions(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            final error = snapshot.error;
            return Text(error.toString());
          } else if (snapshot.hasData) {
            return Remoteterms(result: snapshot.data);
          } else if (!snapshot.hasData) {
            return Text("Unable to get Terms and Conditions");
          } else {
            return Text('');
          }
        });

    /*return Scaffold(
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
                        width: 7.5,
                      ),
                      const Text(
                        'Back',
                        textAlign: TextAlign.right,
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
                              style: TextStyle(
                                  color: Colors.black, fontSize: 16.0)),
                          SizedBox(height: 10.0),
                          Text(
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                              style: TextStyle(
                                  color: Colors.black, fontSize: 16.0)),
                          SizedBox(height: 10.0),
                          Text(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
                            style:
                                TextStyle(color: Colors.black, fontSize: 16.0),
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
    );*/
  }
}

class Remoteterms extends StatelessWidget {
  Remoteterms({this.result});
  var result;
  @override
  Widget build(BuildContext context) {
    print(result);
    /*return Scaffold(
      body: Center(child: Text('$result'),)
    );*/
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
                        width: 7.5,
                      ),
                      const Text(
                        'Back',
                        textAlign: TextAlign.right,
                        style: TextStyle(
                          color: Color(0xff45A1C9),
                          fontSize: 14.0,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                  onPressed: () {
                     Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                                builder: (context) => AuthScreen(
                                      
                                    )));
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
                          Text('$result',
                              style: TextStyle(
                                  color: Colors.black, fontSize: 16.0)),
                          SizedBox(height: 10.0),
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
