import 'dart:collection';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import "package:flutter/material.dart";
import 'dart:collection';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:hostapp/src/util/constants.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/util/constants.dart';
import "package:flutter/material.dart";

class GraphQLConfiguration {
  String d;
  HttpLink httpLink;
  String clientToken;
  final storage = new FlutterSecureStorage();
  String userToken, result, result1;


  ValueNotifier<GraphQLClient> initilize() {

    Map<String, String> header = new HashMap();
    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken"; //userToken;

   print('*************************************************************');
    print('*** Cleint token *** $clientToken');
    print("******** User toke****** \n $userToken");
    print('*************************************************************');

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
// getfromLocalClientToken()async{
//    clientToken =  await storage.read(key: "CToken");
//    return clientToken;
// }

//Anytime when you want to query, Firstly put this before clientoQuery function
  getNeccessartyToken()async{
   //await getFromServerClientToken();
     clientToken = await storage.read(key: Constants.constClientToken);
      userToken = await storage.read(key: Constants.constUserToken);
      print('*** In getNeccessartyToken() Cleint token *** $clientToken');
    print("********  In getNeccessartyToken() User toke****** \n $userToken");
  }


  GraphQLClient clientToQuery(){
    Map<String, String> header = new HashMap();

    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken";

    httpLink = HttpLink(
        uri:
        'https://us-central1-guestregistration-4140a.cloudfunctions.net/api',
        headers: header);

    print('*************************************************************');
    print('*** Cleint token *** $clientToken');
    print("******** User toke****** \n $userToken");
    print('*************************************************************');
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
}