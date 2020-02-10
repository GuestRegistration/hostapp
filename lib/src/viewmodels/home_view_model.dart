
import 'package:flutter/cupertino.dart';

//THis is the business Login to Home Page
class HomeViewModel extends ChangeNotifier{
String title = 'default';
int counter = 0;

void initialize(){
title = 'initialize';
notifyListeners(); //To Notify changes
}

void updateTitle(){
  counter++;
  title = 'Updated; $counter';
  notifyListeners();
}
}