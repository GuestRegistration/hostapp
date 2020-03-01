import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/style/AppTextStyle.dart';
import 'package:hostapp/src/widget/ReservationWidget.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:hostapp/src/viewmodels/MainReservationViewModel.dart';


class MainReservationScreen extends StatefulWidget {
  @override
  _MainReservationScreenState createState() => _MainReservationScreenState();
}

class _MainReservationScreenState extends State<MainReservationScreen> {
  
  @override
  Widget build(BuildContext context) {
     return ViewModelProvider<MainReservationViewModel>.withoutConsumer(
      viewModel: MainReservationViewModel(),
      onModelReady: (model) => model.tab1Initialize(),
      builder: (context, model, child) =>
       buildTab(model)
      );
  
  
  }

  buildTab(MainReservationViewModel model){
    return DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.white,
            elevation: 0,
            actions: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Icon(Icons.search, size: 30, color:  Colors.black,),
              )
            ],
            title:  Text('Reservations', 
              style:  TextStyle(
            color: AppColor.black,
            fontSize: AppFontSizes.largest,
            fontWeight: FontWeight.bold
          )),
            bottom: TabBar(
                unselectedLabelColor: AppColor.primary,
                indicatorSize: TabBarIndicatorSize.tab,
                indicator: BoxDecoration(
                    gradient: LinearGradient(
                        colors: [AppColor.borderColor, AppColor.primary]),
                    borderRadius: BorderRadius.circular(50),
                    color: AppColor.primary),
                tabs: [
                  Tab(
                    child: Align(
                      alignment: Alignment.center,
                      child: Text("UPCOMING"),
                    ),
                  ),
                  Tab(
                    child: Align(
                      alignment: Alignment.center,
                      child: Text("Current"),
                    ),
                  ),
                  Tab(
                    child: Align(
                      alignment: Alignment.center,
                      child: Text("PAST"),
                    ),
                  ),
                ]),
         
         
          ),
          body: TabBarView(children: [
             Tab1(),
            Icon(Icons.movie),
            Icon(Icons.games),
          ]),
          floatingActionButton:FloatingActionButton(onPressed: () { 
             model.addReservation();
             },
            child: Icon(Icons.add, size: 30,),
              ),
        )
     );
  }
}



class Tab1 extends ProviderWidget<MainReservationViewModel> {
  @override
  Widget build(BuildContext context, MainReservationViewModel model) {
    return (model.list == null ? Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    ) : ListView.builder(
            itemCount: model.list.length,
            shrinkWrap: true,
            scrollDirection: Axis.vertical,
            itemBuilder: (BuildContext context , int index){
              if(model.list.length == 0){
              return Center(child: Text('You do not have any reservation. '
                  'Click on the ‘’+ icon’’ button below to add one reservation for free.',
                style:  TextStyle(
                  color: Colors.red,
                  fontStyle: FontStyle.normal,
                  fontSize: 16,
                )
              ),
              );
            }
            return  ReservationWidget(
                getReservation: model.list[index],
                );
               
             
               },))
               ;
  }
}