import 'dart:io';

import 'package:flutter_spinkit/flutter_spinkit.dart';

import 'package:hostapp/src/style/AppColor.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class GraphTester extends StatefulWidget {
  @override
  _GraphTesterState createState() => _GraphTesterState();
}

class _GraphTesterState extends State<GraphTester> {

  @override
  Widget build(BuildContext context) {
    //final HttpLink httpLink = HttpLink(uri: 'https://countries.trevorblades.com'); //Am using someone's api for fetch dummy data
    final HttpLink httpLink = HttpLink(uri: 'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');
    final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
      GraphQLClient(link: httpLink,
      cache: OptimisticCache(
        dataIdFromObject: typenameDataIdFromObject,
      )
      )
    );


    return GraphQLProvider(
      child:  InserDemo(),            //FetchDataDemo(),
      client: client,
    );
  }
}


class FetchDataDemo extends StatefulWidget {
  @override
  _FetchDataDemoState createState() => _FetchDataDemoState();
}

class _FetchDataDemoState extends State<FetchDataDemo> {
  String d = r"""
         query GetCountinet($code: String!){
          continent(code: $code){
            name
            countries{
              name
            }
          }
        }
          """;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('GraphQL client fetchData'),
      ),
      body: Query(
        options: QueryOptions(
          // , variables: <String, dynamic>{
          //   "code" : "AF"
          // }
           documentNode: gql(d),
    variables: <String, dynamic>{
        "code" : "AF"
    },
        ),
        builder: (QueryResult result, {
        VoidCallback refetch,
        FetchMore fetchMore,
        }){
          if(result.data == null){
            return Center(child: Text('Data is Null'));
          }
          //print(result.data['countries'][0]['name']);
          return ListView.builder(
            itemBuilder: (BuildContext context, int index){
             return ListTile(
                            title: Padding(
                 padding: const EdgeInsets.all(8.0),
                 child: Text(result.data['continent']['countries'][index]['name']),
               ),
             );
          },
           itemCount: result.data['continent']['countries'].length,);
         
        }),
    );
  }
}


class InserDemo extends StatefulWidget {
  @override
  _InserDemoState createState() => _InserDemoState();
}

class _InserDemoState extends State<InserDemo> {
  bool processing = false;
  String insertData = r"""
        mutation addProperty($userID : String!
          $name: String!
          $phone: String!
          $email: String!
          $street: String!
          $city: String!
          $state: String!
          $country: String!
          $postal_code: Int!
        ){
        createProperty(user_id: $userID,name: $name,
        phone: $phone, email: $email, street: $street, 
          city: $city, state: $state,
          country: $country, postal_code: $postal_code){
          id
          name
          email
          address{
            country
            city
          }
        }
        }
          """;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('GraphQL client'),
      ),
      body: Center(
        child: Mutation(
          options: MutationOptions(
            documentNode: gql(insertData),
            onCompleted: (data) {
              stopLoading();
              print(data.toString());
            },
            onError: (error) {
              stopLoading();
              print('Error Occur: ${error.toString()}');
            },

          ),
          builder: (runMutation, result) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  (processing ? SpinKitRipple(color: AppColor.colorassence, duration: new Duration(seconds: 1),) :
                  Container(
                    height: 30,
                    width: 250,
                    color: Colors.teal,
                    child: MaterialButton(
                      child: Text('send'),
                      onPressed: (){
                        startLoading();
                        runMutation(<String, dynamic>{
                            "userID": "KrtoxB4cBZsFdGZ975qM",
                            "phone": "09057463831",
                            "email": "horlaz229@gmail.com",
                            "street": "Bodija Adebayo street",
                            "state": "OYO",
                            "postal_code": 123,
                            "name": "Olajire",
                            "city": "Islamdad",
                            "country": "Pakistan"
                        });
                      },
                    ),
                  )),
                  SizedBox(height: 30,),
              status(result)
              ],),
            );
            
           
          },
      
        ),
      )
    );
  }

  status(QueryResult result){
    print(result.data == null);
    if(result.data == null){
        return Text('Response is currently null');
    }else{
      if(result.data['createProperty']['id'] == null){
   return Text('No Data inserted');
 }else{
   print(result.data['createProperty']['id']);
   return Text('Data sucessfully inserted');
 }
    }
  }

  startLoading(){
    setState(() {
      processing = true;
    });
  }

   stopLoading(){
    setState(() {
      processing = false;
    });
  }
}