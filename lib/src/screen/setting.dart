import 'package:country_code_picker/country_code_picker.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/screen/auth_screen.dart';
import 'package:hostapp/src/screen/sign_in.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingScreen extends StatefulWidget {
  final String email;

  // List list;
  SettingScreen({this.email});
  @override
  _SettingScreenState createState() => new _SettingScreenState();
}

class _SettingScreenState extends State<SettingScreen> {
  //var email;
  TextEditingController name = new TextEditingController();
  TextEditingController lastname = new TextEditingController();
  TextEditingController email = new TextEditingController();
  TextEditingController phone = new TextEditingController();
  var phonesplit = [];
  var phone1;
  String delimiter = '-';
  String selectUser = r""" 
        query($email: String!) {    
       getUserByEmail(email: $email){
        email
        name{
          first_name
          last_name
        }
        phone        
      }
}
 """;
  String updateuserquery = r"""
 mutation($email: String!,$id:String!,$phone:String!,$first_name:String!,$last_name:String!){
  updateUser(email:$email,id:$id,phone:$phone,first_name:$first_name,last_name:$last_name){
    name{
      first_name 
      last_name
    }
    phone
    email
  }
}
 """;
  var phoneCode;
  GraphQLConfiguration graphQLConfiguration = GraphQLConfiguration();
  SharedPreferences sharedPreferences;

  getStoredemailanduid() async {
    print("inside getStoredemailanduid function");
    String storedemail,storeduid;
    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      storedemail = sharedPreferences.getString("Storedemail");
      storeduid = sharedPreferences.getString("Storeduid");
      print("storeemail" + storedemail);
      print(sharedPreferences.getString("Storedemail"));
      print("storeduid" + storeduid);
      //selectuser();
    });
  }


  Future<void> selectuser() async {
    print("inside selectuser function");
    String storedemail,storeduid;
    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      storedemail = sharedPreferences.getString("Storedemail");
      storeduid = sharedPreferences.getString("Storeduid");
      print("storeemail" + storedemail);
      print("storeduid" + storeduid);   
    });
    print("storedemail in selectuser" + storedemail);
    GraphQLClient _client = graphQLConfiguration.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
        // document: selectUser,
        documentNode: gql(selectUser),
        variables: {
          'email': storedemail,
       //'email':"diya.feb28@gmail.com",
        },
      ),
    );
    phonesplit0 = 'US';
    if (result.data == null) {
      return Center(child: CircularProgressIndicator());
    } else if (result.data != null) {
      setState(() {
        print("inside setState");
        name = new TextEditingController(
            text: result.data["getUserByEmail"][0]["name"]["first_name"]);
        email = new TextEditingController(
            text: result.data["getUserByEmail"][0]["email"]);
        lastname = new TextEditingController(
            text: result.data["getUserByEmail"][0]["name"]["last_name"]);

        phone1 = result.data["getUserByEmail"][0]["phone"];
        phonesplit = phone1.split(delimiter);
        print("phonesplit" + phonesplit[0].toString());
        print("phonesplit1" + phonesplit[1].toString());
        phone = new TextEditingController(text: phonesplit[1]);
      });
    } else {
      return Center(child: CircularProgressIndicator());
    }
  }

  var phonesplit0;
  Future<void> updateuser() async {
    print("inside update user");
   /* final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    final email1 = user1.email;
    final uid = user1.uid;
    print("email1" + email1);*/
      String storedemail,storeduid;
    sharedPreferences = await SharedPreferences.getInstance();
    setState(() {
      storedemail = sharedPreferences.getString("Storedemail");
      storeduid = sharedPreferences.getString("Storeduid");
      print("storeemail" + storedemail);
      print(sharedPreferences.getString("Storedemail"));
      print("storeduid" + storeduid);
     
    });
    print("phonesplit0" + phonesplit0);
    print("${phonesplit0.toString()}" + "-" + "${phone.text}");
    GraphQLClient _client = graphQLConfiguration.clientToQuery();
    QueryResult result = await _client.mutate(
      MutationOptions(
        documentNode: gql(updateuserquery),
        variables: {
          'id': storeduid,
          'email': storedemail,
          'first_name': name.text.trim(),
          'last_name': lastname.text.trim(),
          'phone': "${phonesplit0.toString()}" + "-" + "${phone.text}",
        },
      ),
    );
  }

  void initState() {
    super.initState();
    phonesplit0 = 'US';
    //getStoredemailanduid();
    selectuser();
  }

  void _onCountryChange(countryCode) {
    phoneCode = countryCode.toString();
    print("New Country selected: " + countryCode.toString());
  }

  void signOut() async {
    //.... code for signOut

    final FirebaseAuth auth = FirebaseAuth.instance;
    final FirebaseUser user1 = await auth.currentUser();
    SharedPreferences prefrences = await SharedPreferences.getInstance();
await prefrences.clear();
    await FirebaseAuth.instance.signOut().whenComplete(() => navigate());
    await googleSignIn.signOut().whenComplete(() => navigate());
  }

  navigate() {
    print("inside navigate");
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          //Navigate to Let's get started screen
          return AuthScreen();
        },
      ),
    );
  }

  Future geturl(String url) async {
    print("url" + url);
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;
    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      //result = remoteConfig.getString('TermsConditions');
      //result = remoteConfig.getString('Contactusurl');
      result = remoteConfig.getString(url);
    } on FetchThrottledException catch (exception) {
      print(exception);
    } catch (exception) {
      print("unable to fetch remote config");
    }
    return launch(result);
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (phonesplit.isEmpty) {
      setState(() {
        phonesplit0 = 'US';
      });
    } else {
      setState(() {
        phonesplit0 = phonesplit[0];
      });
    }
    return Scaffold(
      backgroundColor: Colors.white,
      resizeToAvoidBottomPadding: false,
      body: //_children[_currentIndex],
          SingleChildScrollView(
        child: new Container(
            child: new Container(
                child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: 32.0,
            ),
            Center(
              child: Text(
                "Settings",
                style: TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                    fontSize: 34.0),
              ),
            ),
            Align(
              alignment: Alignment(-.85, 0),
              child: Container(
                child: Text(
                  "First Name",
                  style: TextStyle(color: Color(0xff80000000), fontSize: 16.0),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              // alignment: Alignment(-.100, 0),
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new TextFormField(
                    controller: name,
                    onChanged: (val) {
                      //  isEmpty();
                    },
                    decoration: InputDecoration(
                      hintText: "Joe",
                      hintStyle: TextStyle(
                          color: Color(
                        0xff63A5C0,
                      )),
                      contentPadding:
                          EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                      border: InputBorder.none,
                    )),
              ),
            ),
            SizedBox(
              height: 32.0,
            ),
            Align(
              alignment: Alignment(-.85, 0),
              child: Container(
                child: Text(
                  "Last Name",
                  style: TextStyle(color: Color(0xff80000000), fontSize: 16.0),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              //  alignment: Alignment(-.100, 0),
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new TextFormField(
                    controller: lastname,
                    onChanged: (val) {
                      //  isEmpty();
                    },
                    decoration: InputDecoration(
                      hintText: "Bloggs",
                      hintStyle: TextStyle(
                          color: Color(
                        0xff63A5C0,
                      )),
                      contentPadding:
                          EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                      border: InputBorder.none,
                    )),
              ),
            ),
            SizedBox(
              height: 32.0,
            ),
            Align(
              alignment: Alignment(-.85, 0),
              child: Container(
                child: Text(
                  "Email",
                  style: TextStyle(color: Color(0xff80000000), fontSize: 16.0),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              // alignment: Alignment(-.100, 0),
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new TextFormField(
                    enabled: false,
                    controller: email,
                    style: TextStyle(color: Color(0xffCC8F8F8F)),
                    decoration: InputDecoration(
                      hintText: "joebloggs@gmail.com",
                      hintStyle: TextStyle(
                          color: Color(
                        0xff63A5C0,
                      )),
                      contentPadding:
                          EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                      border: InputBorder.none,
                    )),
              ),
            ),
            SizedBox(
              height: 32.0,
            ),
            Align(
              alignment: Alignment(-.85, 0),
              child: Container(
                child: Text(
                  "Mobile Number",
                  style: TextStyle(color: Color(0xff80000000), fontSize: 16.0),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Container(
              //height: 50.0,
              //width: 320.0,
              // alignment: Alignment(-.100, 0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Container(
                    decoration: new BoxDecoration(
                        color: Colors.white,
                        border: Border.all(color: Color(0xffC6DEE9)),
                        borderRadius: new BorderRadius.circular(10.0)),
                    child: Row(
                      children: <Widget>[
                        IgnorePointer(
                          ignoring: true,
                          child: Container(
                            height: 50.0,
                            decoration: new BoxDecoration(
                                color: Colors.white,
                                border: Border.all(color: Color(0xffC6DEE9)),
                                borderRadius: new BorderRadius.circular(10.0)),
                            child: new CountryCodePicker(
                              textStyle: TextStyle(color: Color(0xffCC8F8F8F)),

                              onChanged: _onCountryChange,
                              initialSelection: phonesplit0,
                              //favorite: ['+1', 'US'],
                              showCountryOnly: false,
                              // optional. Shows only country name and flag when popup is closed.
                              showOnlyCountryWhenClosed: false,
                              // optional. aligns the flag and the Text left
                              alignLeft: false,
                              //itemBuilder: _buildDropdownItem,
                            ),
                          ),
                        ),
                        Container(
                          //alignment: Alignment.center,
                          width: 228.0,
                          child: new TextFormField(
                              enabled: false,
                              controller: phone,
                              style: TextStyle(color: Color(0xffCC8F8F8F)),
                              keyboardType: TextInputType.phone,
                              autofocus: false,
                              decoration: InputDecoration(
                                hintText: "(123) 456-7890",
                                fillColor: Color(0xffC8C3D4),
                                hintStyle: TextStyle(
                                    color: Color(
                                  0xff63A5C0,
                                )),
                                contentPadding:
                                    EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
                                border: InputBorder.none,
                              )),
                        ),
                        SizedBox(
                          height: 30.0,
                        ),
                        SizedBox(
                          height: 32.0,
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Center(
              child: SizedBox(
                width: 320.0,
                height: 47.0,
                child: Container(
                  //color: Colors.red,
                  child: RaisedButton(
                    onPressed: () {
                      updateuser();
                    },
                    child: const Text(
                      'Update',
                      style: TextStyle(
                          fontSize: 16.0,
                          color: Colors.white,
                          fontWeight: FontWeight.w600),
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(13))),
                    color: Color(0xff45A1C9),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    //getTermsofService();
                    geturl('Termsofserviceurl');
                  },
                  child: Row(
                    children: <Widget>[
                      Container(
                        child: Text(
                          'Terms of Service',
                          style: TextStyle(
                            color: Color(0xff8F8F8F),
                            fontSize: 18.0,
                          ),
                        ),
                      ),
                      Container(
                        width: 124.0,
                        alignment: Alignment.centerRight,
                        child: SizedBox(
                          //  width: 190.0,
                          child: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    //getPrivacyPolicy();
                    geturl('Privacypolicyurl');
                  },
                  child: Row(
                    children: <Widget>[
                      Text(
                        'Privacy Policy ',
                        style: TextStyle(
                          color: Color(0xff8F8F8F),
                          fontSize: 18.0,
                        ),
                      ),
                      //SizedBox(width: 150.0,),
                      Align(
                        //alignment: Alignment(-.100, 0),
                        child: Container(
                          width: 147.0,
                          alignment: Alignment.centerRight,
                          child: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Align(
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 320.0,
                decoration: new BoxDecoration(
                    color: Colors.white,
                    borderRadius: new BorderRadius.circular(
                      10.0,
                    ),
                    border: Border.all(color: Color(0xffC6DEE9))),
                child: new FlatButton(
                  onPressed: () {
                    // getcontactus();
                    geturl('Contactusurl');
                  },
                  child: Row(
                    children: <Widget>[
                      Text(
                        'Contact Us',
                        style: TextStyle(
                          color: Color(0xff8F8F8F),
                          fontSize: 18.0,
                        ),
                      ),
                      Container(
                        width: 180.0,
                        alignment: Alignment.centerRight,
                        child: SizedBox(
                          //width: 210.0,
                          child: Icon(
                            Icons.arrow_forward_ios,
                            color: Color(0xff808080),
                            size: 18.0,
                            textDirection: TextDirection.ltr,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Center(
              child: SizedBox(
                width: 320.0,
                height: 47.0,
                child: Container(
                  color: Color(0xffD35E5E),
                  child: RaisedButton(
                    onPressed: () {
                      signOut();
                    },
                    child: const Text(
                      'Sign out',
                      style: TextStyle(
                          fontSize: 16.0,
                          color: Colors.white,
                          fontWeight: FontWeight.w600),
                    ),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(13))),
                    color: Color(0xffD13B3B),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
          ],
        ))),
      ),
    );
  }
}
