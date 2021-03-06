import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/graphQlQuery.dart';
import 'package:hostapp/src/locator.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart';
import 'package:hostapp/src/service/GraphQLConfiguration.dart';

class GraphTester extends StatefulWidget {
  @override
  _GraphTesterState createState() => _GraphTesterState();
}

class _GraphTesterState extends State<GraphTester> {
var _graphQlConfiq = locator<GraphQLConfiguration>();


  @override
  Widget build(BuildContext context) {
    // //final HttpLink httpLink = HttpLink(uri: 'https://countries.trevorblades.com'); //Am using someone's api for fetch dummy data
    // final HttpLink httpLink = HttpLink(uri: 'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');
    // final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
    //   GraphQLClient(link: httpLink,
    //   cache: OptimisticCache(
    //     dataIdFromObject: typenameDataIdFromObject,
    //   )
    //   )
    // );


    return GraphQLProvider(
      child: InserDemo(),
      client: _graphQlConfiq.initilize(),
    );
  }
}


class FetchDataDemo extends StatefulWidget {
  @override
  _FetchDataDemoState createState() => _FetchDataDemoState();
}

class _FetchDataDemoState extends State<FetchDataDemo> {
    List<GetProperties> propertlist = List<GetProperties>();
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
           documentNode: gql(getProperties),
    
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

              print(result.data['getProperties']);
//               propertlist.add(
// //  GetProperties(
// //             email: result.data["getProperties"][index]["email"],
// //             id: result.data["getProperties"][index]["id"],
// //             name: result.data["getProperties"][index]["name"],
// //             phone: result.data["getProperties"][index]["phone"],
// //             address:
// //              Address(street: result.data["getProperties"][index]["address"]['street'],
// //              country: result.data["getProperties"][index]["address"]['country']),
// //             terms: result.data["getProperties"][index]["terms"],
// //               )
//               );
              

             return ListTile(
                            title: Padding(
                 padding: const EdgeInsets.all(8.0),
                 child: Text(propertlist[index].getEmail()), //[index]['name']
               ),
             );
          },
           itemCount: result.data['getProperties'].length,);
         
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
        mutation addProperty(
          $phone: String!
          $name: String!
          $email: String!
          $street: String!
          $rules: String
          $phoneCountry_code: String!
          $terms: String
          $country: String!
        ){
        createProperty(name: $name,
        phone_number: $phone, email: $email, street: $street, 
          terms: $terms, phone_country_code: $phoneCountry_code,
          country: $country, rules: $rules){
          id
          name
          email
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
                        "phone": '09057463831',
                        "email": 'horlaz229@gmail.com',
                        "street": 'Bodija Adebayo street',
                        "rules": 'My Rules is rules',
                        "name": 'Olajire',
                        'phoneCountry_code': '+232',
                        "terms": 'No Smoking Asshole',
                        "country": 'Pakistan'
                        });
                      },
                    ),
                  )),

                  //  (processing ? SpinKitRipple(color: AppColor.colorassence, duration: new Duration(seconds: 1),) :
                  // Container(
                  //   height: 30,
                  //   width: 250,
                  //   color: Colors.teal,
                  //   child: MaterialButton(
                  //     child: Text('get Token'),
                  //     onPressed: (){
                  //       _graphQlConfiq.getFromServerClientToken();
                  //     },
                  //   ),
                  // )),

                  SizedBox(height: 20,),

                  Container(
                    height: 30,
                    width: 250,
                    color: Colors.teal,
                    child: MaterialButton(
                      child: Text('See Token'),
                      onPressed: (){
                        //_graphQlConfiq.local();
                      },
                    ),
                  ),
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