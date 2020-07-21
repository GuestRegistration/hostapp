import 'dart:collection';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import "package:flutter/material.dart";
import 'package:hostapp/src/util/constants.dart';

class GraphQLConfiguration {
  String d;
  HttpLink httpLink;
  String clientToken;
  final storage = new FlutterSecureStorage();
  String userToken, result, result1;
  List<String> storeToken = List<String>();


  ValueNotifier<GraphQLClient> initilize() {
      putInInitalize(); //only ckient token
    Map<String, String> header = new HashMap();
    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken"; //userToken;

  //  print('*************************************************************');
  //   print('*** Cleint token *** $clientToken');
  //   print("******** User toke****** \n $userToken");
  //   print('*************************************************************');

    httpLink = HttpLink(
        uri:
        'https://us-central1-guestregistration-4140a.cloudfunctions.net/api',
        headers: header);

//Endpoint confiquration
    ValueNotifier<GraphQLClient> client =
    ValueNotifier<GraphQLClient>(GraphQLClient(
        link: httpLink,
        cache: OptimisticCache(
          dataIdFromObject: typenameDataIdFromObject,
        )));

    return client;
  }


  // Future<void> getuserid() async {
  //   // //print("inside getuserid()  ");
  //   // FirebaseUser user = await FirebaseAuth.instance.currentUser();
  //   // user.getIdToken().then((tokenresult) {
  //   //   userToken = tokenresult.token;
  //   //   print("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" +  userToken);
  //   //   return userToken;
  //   // });
//   // }


//Anytime when you want to query, Firstly put this before clientoQuery function
  getNeccessartyToken()async{
    final FirebaseAuth auth = FirebaseAuth.instance;
              final FirebaseUser user = await auth.currentUser();
              
         var result = await user.getIdToken();
   //await getFromServerClientToken();
     clientToken = await storage.read(key: Constants.constClientToken);
     // userToken = await storage.read(key: Constants.constUserToken);
     userToken = result.token;

      // print('*** In getNeccessartyToken() Cleint token *** $clientToken');
    //  print("********  In getNeccessartyToken() User toke****** \n $userToken");
  }

  GraphQLClient clientToQuery(){
    Map<String, String> header = new HashMap();

    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken";

    httpLink = HttpLink(
        uri:'https://us-central1-guestregistration-4140a.cloudfunctions.net/api',
        headers: header);

    // print('*************************************************************');
    // print('*** Cleint token *** $clientToken');
    // print("******** User toke****** \n $userToken");
    print('*********************User token****************************************');
    original(userToken);
    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }

  //Must call once.
  getFromServerClientToken() async { //Fetch client token and store..
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;

    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 10));
      await remoteConfig.activateFetched();
      result = remoteConfig.getString('ClientToken'); //Firebase config Name
      await storage.write(key: Constants.constClientToken, value: result.toString());

    } on FetchThrottledException catch (exception) {
      // Fetch throttled.
      print(exception);
    } catch (exception) {
      print('Unable to fetch remote config. Cached or default values will be '
          'used');
    }
    return result;
  }

  putInInitalize()async{
 await getFromServerClientToken();
  //await getNeccessartyToken();
  }

   getUserToken()async{
      final FirebaseAuth auth = FirebaseAuth.instance;
              final FirebaseUser user = await auth.currentUser();
              
         var result = await user.getIdToken();
         //print(result.token);
         //var toke = await user.getIdToken(refresh: true);
         //logPrint(result.token);
        //  original(result.token);

   }

   logout()async{
 await storage.deleteAll();
   }


  //  static void logPrint(Object object) async {
  //   int defaultPrintLength = 500;
  //   if (object == null || object.toString().length <= defaultPrintLength) {
  //     print('Debug Output 1');
  //      print(object);
  //   } else {
  //      String log = object.toString();
  //      int start = 0;
  //      int endIndex = defaultPrintLength;
  //      int logLength = log.length;
  //      int tmpLogLength = log.length;
  //      while (endIndex < logLength) {
  //         print(log.substring(start, endIndex));
  //         endIndex += defaultPrintLength;
  //         start += defaultPrintLength;
  //         tmpLogLength -= defaultPrintLength;
  //      }
  //      if (tmpLogLength > 0) {
  //         print('Debug Output 2');
  //         print(log.substring(start, logLength));
  //      }
  //   }
  //  }

   printTwo(String token){
     int index = 0;
    String value;
    //String token1, token2;
     while (token.length > 0) {
        int initLength;
 //int initLength = (token.length >= 500 ? 500 : token.length);
      if(token.length >= 500){
      initLength = 500;
      index++;
      print(index);
      }else{
      initLength = token.length;
      index++;
       print(index);
      }
  // storeToken.insert(index, token.substring(0, initLength));
  //print(storeToken[index]);
  print(storeToken.length);
  int endLength = token.length;
  token = token.substring(initLength, endLength);
}

for(int i = 1; storeToken.length > i; i++){
  
  //print(storeToken[i]);
}
   }

original(String token){
while (token.length > 0) {
  int initLength = (token.length >= 500 ? 500 : token.length);
  print(token.substring(0, initLength));
  int endLength = token.length;
  token = token.substring(initLength, endLength);
}
}
}