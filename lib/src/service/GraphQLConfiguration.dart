
import 'package:graphql_flutter/graphql_flutter.dart';
import "package:flutter/material.dart";
class GraphQLConfiguration{

//Endpoint confiquration
static HttpLink httpLink = HttpLink(uri: 'https://us-central1-guestregistration-4140a.cloudfunctions.net/api');

    final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
      GraphQLClient(link: httpLink,
      cache: OptimisticCache(
        dataIdFromObject: typenameDataIdFromObject,
      )
      )
    );

    //For Query................
    GraphQLClient clientToQuery() {
    return GraphQLClient(
      cache: OptimisticCache(dataIdFromObject: typenameDataIdFromObject),
      link: httpLink,
    );
  }

}
