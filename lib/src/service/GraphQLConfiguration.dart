
import 'dart:collection';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import "package:flutter/material.dart";

class GraphQLConfiguration{
String d;
 
 HttpLink httpLink;
 String clientToken;
  final storage = new FlutterSecureStorage();

ValueNotifier<GraphQLClient> initilize(){
  getFromServerClientToken();
  getfromLocalClientToken().then((v){
    //print('Have Get Token Here');
  clientToken = v;
  print(clientToken);
  });
  d = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjZjBjNjQyZDQwOWRlODJlY2M5MjI4ZTRiZDc5OTkzOTZiNTY3NDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3Vlc3RyZWdpc3RyYXRpb24tNDE0MGEiLCJhdWQiOiJndWVzdHJlZ2lzdHJhdGlvbi00MTQwYSIsImF1dGhfdGltZSI6MTU4Mzg0ODA5MCwidXNlcl9pZCI6IlRwZUFqeTUwTUViVkdsRkNUYnI2bkVLaDZhYzIiLCJzdWIiOiJUcGVBank1ME1FYlZHbEZDVGJyNm5FS2g2YWMyIiwiaWF0IjoxNTgzODQ4MDkwLCJleHAiOjE1ODM4NTE2OTAsInBob25lX251bWJlciI6IisyMzQ4MTM5MDA0NTcxIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMjM0ODEzOTAwNDU3MSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.FrfH2Sf2ph70Ff5gYnKaDBJwzKb3C5x4fmsocyD1xaTKBks5KcWnLEgFNd8pD_U08T4cIuY3sKWA5L3nIcUYDDUYltkaeUM42Q2WsGtjiWgwIbT7jagu1C-SjAzYRNfMZdNnxfe2i0ImyFeFHfXN3zx2uDEKakigyVLxAkr58bbYxI5LwSxKOCClP2Lm5TUr3XlbPjfwgO2nj1_MU309mfchBx86Nkwd6my-0hynZ86_INp_YGk1vUi6BJ9iPm4UhcEQijWuPeKvRTWhKXBNLN_-eJfcMnZDqT_Txz3EXbF4HErspUheeUDtrTzVMSwrMQDW4rsqJFNpzOO_cLW1BQ";
// Read value 
// String clientToken = getClientToken();
// String userToken = getUserToken();

  Map<String, String> header = new HashMap();
  header['gr-client-token'] = clientToken;
  header['gr-user-token'] = d;//userToken;

 httpLink = HttpLink(uri: 'https://us-central1-guestregistration-4140a.cloudfunctions.net/api', 
 headers: header);

//Endpoint confiquration
  ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
      GraphQLClient(link: httpLink,
      cache: OptimisticCache(
        dataIdFromObject: typenameDataIdFromObject,
      )
      )
    );

    return client;
}

getfromLocalClientToken()async{
  //return await storage.read(key: "CToken");
   clientToken =  await storage.read(key: "CToken");
 // return clientToken;
}

getUserToken()async{
  String userToken = await storage.read(key: "UserToken");
  return userToken;
}

getNeccessartyToken()async{ 
   await getfromLocalClientToken();
     //await getUserToken(); til vijay implement
}

    //For Query................
    GraphQLClient clientToQuery(){
      
d =  "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyZTZiMWM5MjFmYTg2NzcwZjNkNTBjMTJjMTVkNmVhY2E4ZjBkMzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3Vlc3RyZWdpc3RyYXRpb24tNDE0MGEiLCJhdWQiOiJndWVzdHJlZ2lzdHJhdGlvbi00MTQwYSIsImF1dGhfdGltZSI6MTU4NDE5NDQyNywidXNlcl9pZCI6IlRwZUFqeTUwTUViVkdsRkNUYnI2bkVLaDZhYzIiLCJzdWIiOiJUcGVBank1ME1FYlZHbEZDVGJyNm5FS2g2YWMyIiwiaWF0IjoxNTg0MTk0NDMxLCJleHAiOjE1ODQxOTgwMzEsInBob25lX251bWJlciI6IisyMzQ4MTM5MDA0NTcxIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMjM0ODEzOTAwNDU3MSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.WyID6XoCRusirzQP43zdRzDWEAu4EpXfqrpTnN266sbg470OMm7SAHKhY2_j28yaFSyxL2WFrzyAaKj3dPZykZ6b9Rl5ZY-Yqk7cGmPDGB08QLBenGOXEWHD4ZamMfBSGXuZPffP9QAG6dfylIFMUPLyl4bxvUiX0iY-jkDA9HpwTmyxZuMbX0GgazrrP_WUFekMJFtJKIEfPDeG4cLvCxWdQwU2n1URhWnQyCWG69MT8NV1TKV-vGmt9NOWa9PHHaY-_r5WMBe2joym1CPNivE5YYvy4exONUa4tluq9-oSjUplz4MXZgIN7v9vEurQrfN6-OE6heNvAOVcFirzag";
  
  Map<String, String> header = new HashMap();
  header['gr-client-token'] = clientToken;
  header['gr-user-token'] = d;//userToken;

 httpLink = HttpLink(uri: 'https://us-central1-guestregistration-4140a.cloudfunctions.net/api', 
 headers: header);

// print('*************************************************************');
//  print('*** CLiet Token *** $clientToken');
//   print('*** User Token *** $d');
//   print('*************************************************************');

    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }

  getFromServerClientToken()async{
  final RemoteConfig remoteConfig = await RemoteConfig.instance;
  // Enable developer mode to relax fetch throttling
   var result;

   try {
             remoteConfig.setConfigSettings(RemoteConfigSettings(debugMode: true));
              await remoteConfig.fetch(expiration: const Duration(seconds: 0));
              await remoteConfig.activateFetched();
             result = remoteConfig.getString('ClientToken');
            // print("************************Wrting to local secure************************");
             //print(result);
             await storage.write(key: 'CToken', value: result.toString());
             //print('************************');
            } on FetchThrottledException catch (exception) {
              // Fetch throttled.
              print(exception);
            } catch (exception) {
              print(
                  'Unable to fetch remote config. Cached or default values will be '
                  'used');
            }
  }

}
