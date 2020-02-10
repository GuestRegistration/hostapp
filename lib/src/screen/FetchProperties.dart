import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:hostapp/src/widget/ExpansionInfo.dart';

class FetchProperties extends StatefulWidget {
  @override
  _FetchPropertiesState createState() => _FetchPropertiesState();
}

class _FetchPropertiesState extends State<FetchProperties> {

  FirestoreService firestoreService = new FirestoreService();
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(actions: <Widget>[],),
    body: Center(child: 
    Text('Fetch Proprtiees'),)
    );
  }
}

