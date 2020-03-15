import 'dart:collection';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import "package:flutter/material.dart";
import 'dart:collection';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import "package:flutter/material.dart";

class GraphQLConfiguration {
  String d;
  HttpLink httpLink;
  String clientToken;
  final storage = new FlutterSecureStorage();
  String userToken, result, result1;

  getfromLocalClientToken() async {
    //return await storage.read(key: "CToken");
    clientToken = await storage.read(key: "CToken");
    // return clientToken;
  }

  ValueNotifier<GraphQLClient> initilize() {
    getFromServerClientToken();
    getfromLocalClientToken().then((v) {
      //print('Have Get Token Here');
      clientToken = v;
      print(clientToken);
    });
    getuserid();

    Map<String, String> header = new HashMap();
    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken"; //userToken;

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

  getFromServerClientToken() async {
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    var result;

    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      result = remoteConfig.getString('ClientToken');

      await storage.write(key: 'CToken', value: result.toString());
    } on FetchThrottledException catch (exception) {
      // Fetch throttled.
      print(exception);
    } catch (exception) {
      print('Unable to fetch remote config. Cached or default values will be '
          'used');
    }
    return result;
  }

  Future<void> getuserid() async {
    // print("inside getuserid()  ");
    // FirebaseUser user = await FirebaseAuth.instance.currentUser();

    // user.getIdToken().then((tokenresult) {
    //   userToken = tokenresult.token;
    //   print(
    //       "tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" +
    //           userToken);
    //   return userToken;
    // });
  }

  getNeccessartyToken()async{
    await getfromLocalClientToken();
    String ctoken = await getFromServerClientToken();
    //await getUserToken(); til vijay implement
  }

  String getclientToken;

  GraphQLClient clientToQuery(){
    Map<String, String> header = new HashMap();
    getuserid();
    //getFromServerClientToken();

    //print("getclientToken" + '$ctoken');
    header['gr-client-token'] = clientToken;
    header['gr-user-token'] = "Bearer $userToken";

    httpLink = HttpLink(
        uri:
        'https://us-central1-guestregistration-4140a.cloudfunctions.net/api',
        headers: header);
    print('*************************************************************');
    //print('*** CLiet Token *** $clientToken');
    print('*** CLiet result *** $clientToken');
    print('*************************************************************');
    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }

  getUserToken() async {
    String userToken = await storage.read(key: "UserToken");
    return userToken;
  }

}