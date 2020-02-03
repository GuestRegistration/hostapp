import 'package:flutter/material.dart';
import 'package:hostapp/src/app.dart';

class Scrollingimage extends StatefulWidget {
   
 
  @override
  _ScrollingimageState createState() => new _ScrollingimageState();
}

class _ScrollingimageState extends State<Scrollingimage> {
 
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
    
          child: new Center(
            
              child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Center(
            child: Column(
              children: <Widget>[
                Container(
                  height: 300.0,
                  width: 300.0,
                  color: Colors.black12,
                child: Center(child: Text("Scrolling images or video")),
                ),
                new SizedBox(
                  height: 32.0,),
                new SizedBox(
                  height: 60.0,
                  width: 300.0,
                  child: new RaisedButton(
                      child: const Text(
                        "Let's get started ",
                        style: TextStyle(
                            color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                      
                      color: Colors.black12,
                      onPressed: () {
                           Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return PasswordlessApp();
        },
      ),
    );           
                   
                      },
                    ),
                )
              ],
            )
          ),
         ],
      ))),
    );
  }
}
