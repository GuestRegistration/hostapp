import 'dart:collection';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import "package:flutter/material.dart";

class GraphQLConfiguration {
  String d =
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjZjBjNjQyZDQwOWRlODJlY2M5MjI4ZTRiZDc5OTkzOTZiNTY3NDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3Vlc3RyZWdpc3RyYXRpb24tNDE0MGEiLCJhdWQiOiJndWVzdHJlZ2lzdHJhdGlvbi00MTQwYSIsImF1dGhfdGltZSI6MTU4MzU5NjY5MSwidXNlcl9pZCI6IlRwZUFqeTUwTUViVkdsRkNUYnI2bkVLaDZhYzIiLCJzdWIiOiJUcGVBank1ME1FYlZHbEZDVGJyNm5FS2g2YWMyIiwiaWF0IjoxNTgzNTk2NjkxLCJleHAiOjE1ODM2MDAyOTEsInBob25lX251bWJlciI6IisyMzQ4MTM5MDA0NTcxIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMjM0ODEzOTAwNDU3MSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.Uxr-9_65FkGLg_PjrQR4OtlBMv7x1q87-w39wmVndF-e2KXJTJd8zgS5gMOE9BdPBH9QHhSvMywzpH1WbNWl-ZtQjAlgrdrxNmvXMt1_0C33I1v6YaCR8EuGQrEGSV8tibgwQKqu3OSAyAftDEX9N6lDOkX4l8ik0ecz5JmuXrgnULs4El_EKJmuzP_5Sfg1nbuYGaOmp2y25fT22FevdvvUnbxMa3AO5D7kfoDDworKVW4mtnWKE5GittMgbdQuLtZnwT9bYtHcHPb6pNOZUi51qWXCFlC-B-4OvDsVDrQFuQhdMTJpAgE2PAE_Uyr0TzTif77y2u1EdTkBf5LMFA";

  HttpLink httpLink;
  String clientToken;
  final storage = new FlutterSecureStorage();
  String token, result,result1;
//Endpoint confiquration
/*  static HttpLink httpLink = HttpLink(
      uri:
          'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');

  final ValueNotifier<GraphQLClient> client =
      ValueNotifier<GraphQLClient>(GraphQLClient(
          link: httpLink,
          cache: OptimisticCache(
            dataIdFromObject: typenameDataIdFromObject,
          )));

  //For Query................
  GraphQLClient clientToQuery() {
    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }*/

  /*getfromLocalClientToken() async {
    print("inside getfromLocalClientToken ");
    clientToken = await storage.read(key: "CToken");
    //print("clientToken"+clientToken);
  }*/

 getFromServerClientToken() async {
    print("inside getFromServerClientToken ");
    final RemoteConfig remoteConfig = await RemoteConfig.instance;
    // Enable developer mode to relax fetch throttling
    var result;

    try {
      remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
      await remoteConfig.fetch(expiration: const Duration(seconds: 0));
      await remoteConfig.activateFetched();
      result = remoteConfig.getString('ClientToken');
      result1 = result;
      // print("************************Wrting to local secure************************");
      //print(result);
      //await storage.write(key: 'CToken', value: result.toString());
      print('************************result'+result);
         print('************************result11111111111111111'+result1);
    } on FetchThrottledException catch (exception) {
      // Fetch throttled.
      print(exception);
    } catch (exception) {
      print('Unable to fetch remote config. Cached or default values will be '
          'used');
    }
         print('************************');
              print('************************ $result');
    return result1;
  }

  Future<void> getuserid() async {
    print("inside getuserid()  ");
    FirebaseUser user = await FirebaseAuth.instance.currentUser();

    user.getIdToken().then((tokenresult) {
      token = tokenresult.token;
      print(
          "tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" +
              token);
      return token;
    });
  }

  GraphQLClient clientToQuery() {
    Map<String, String> header = new HashMap();
        getuserid();
    getFromServerClientToken();


   header['gr-client-token'] = '$result1';
  print("$result1");
    // header['gr-client-token'] = clientToken;
    // header['gr-client-token'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyLWdyYXBoUUxAdmlydHVhbHdvcmtzLm5nIiwicGFzc3dvcmQiOiJsaWZlLWlzLWdvb2QiLCJpYXQiOjE1ODM5MDAxMDJ9.E7vn8LWUvUyzMyp2_hxFFBytjHkt35NGq7738bghDJY";
    //header['gr-client-token'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyLWdyYXBoUUxAdmlydHVhbHdvcmtzLm5nIiwicGFzc3dvcmQiOiJsaWZlLWlzLWdvb2QiLCJpYXQiOjE1ODM1OTY0OTZ9.GvmNieDBYOXJiOqRkyIRnmj8U2XQFUvDnyi1mVSjUWU";
    //header['gr-user-token'] = d;//userToken;
    header['gr-user-token'] = "Bearer $token";

    httpLink = HttpLink(
        uri:
            'https://us-central1-guestregistration-4140a.cloudfunctions.net/api',
        headers: header);
    print('*************************************************************');
    //print('*** CLiet Token *** $clientToken');
    print('*** User result *** $result');
    print('*************************************************************');
    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }
}
