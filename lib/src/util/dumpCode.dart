 // signInWithGoogle().whenComplete(() async {
                      //    //After completion of signInWithGoogle its add the entry in cloud firestore database
                      //   final FirebaseAuth auth = FirebaseAuth.instance;
                      //   final FirebaseUser user1 = await auth.currentUser();
                      //   final email1 = user1.email;
                      //   String storedemail = user1.email;
                      //   String storeduid = user1.uid;
                      //   print("email1" + storedemail);

                      //   if(storedemail == null){
                      //     stopLoading();
                      //     showErrorMessage(error: 'Error occur, Please try again.');

                      //   }else{
                      //      storedemailanduid(storedemail,storeduid); //Store Email and ID
                      //   GraphQLClient _client = await
                      //       graphQLConfiguration.clientToQuery();
                      //   QueryResult result = await _client.mutate(
                      //     MutationOptions(
                      //       document: gql(selectdata),
                      //       //document: selectdata,
                      //       variables: {
                      //         'email': email1,
                      //       },
                      //     ),
                      //   ).catchError((e){
                      //       stopLoading();
                      //       showErrorMessage(error: e.toString());

                      //       }).timeout(Duration(seconds: 5,), onTimeout: (){
                      //         showErrorMessage(error: 'Server Timeout');
                      //       },);

                      //   if (result.data["getUserByEmail"] == null) {
                      //     print("******* THIS IS NEW USER*************");
                      //     Navigator.pushReplacement(
                      //         context,
                      //         MaterialPageRoute(
                      //             builder: (context) => LoginPage(
                      //                   existingemail: email1.toString(),
                      //                 )));
                      //      return LoginPage(existingemail: email1.toString());
                      //   } else {
                      //      print("******* THIS IS EXISTING USER*************");
                      //    // return WelcomeScreen(email: email1.toString());
                      //     Navigator.pushReplacement(
                      //         context,
                      //         MaterialPageRoute(
                      //             builder: (context) => WelcomeScreen(
                      //                   email: email1.toString(),
                      //                 )));
                      //   }

                      //   }
                        
                    
                      //  });