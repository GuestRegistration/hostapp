import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/screen/reservationsTabs/UpcomingTab.dart';
import 'package:hostapp/src/screen/reservationsTabs/ApprovedTab.dart';
import 'package:hostapp/src/screen/reservationsTabs/PastTab.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:hostapp/src/model/getPropertiesModel.dart'; 
import 'package:hostapp/src/viewmodels/MainReservationViewModel.dart';


class MainReservationScreen extends StatefulWidget {
  @override
  _MainReservationScreenState createState() => _MainReservationScreenState();
}

class _MainReservationScreenState extends State<MainReservationScreen> {
       GetProperties _selectedProperty;
       String propertyID;
  
  @override
  Widget build(BuildContext context) {
     return ViewModelProvider<MainReservationViewModel>.withConsumer(
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
          appBar: PreferredSize(
             preferredSize: Size.fromHeight(100.0),  
             child: AppBar(
              backgroundColor: Colors.white,
              elevation: 0,
              centerTitle: true,
              // actions: <Widget>[
              //   Padding(
              //     padding: const EdgeInsets.all(8.0),
              //     child: Icon(Icons.search, size: 30, color:  Colors.black,),
              //   )
              // ],
              title:  Text('Reservations', 
                style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.largest,
              fontWeight: FontWeight.bold
            )),
              bottom: TabBar(
                  unselectedLabelColor: Color(0xFFA0A0A0),
                  indicatorSize: TabBarIndicatorSize.label,
                  labelColor: Color(0xFF45A1C9),
                  indicatorWeight: 1.0,
                  
                  indicator: BoxDecoration(
                      gradient: LinearGradient(
                          colors: [AppColor.disableButton, AppColor.disableButton]),
                      borderRadius: BorderRadius.circular(15),
                      color: AppColor.borderColor),
                      //indicatorColor: Color(0xFF45A1C9),
                  tabs: [
                    Container(
                      height: 30,
                      child: Tab(
                        child: Align(
                          alignment: Alignment.center,
                          child: Text("UNAPPROVED"),
                        ),
                      
                      ),
                    ),
                    Container(
                      height: 30,
                      child: Tab(
                        child: Align(
                          alignment: Alignment.center,
                          child: Text("APPROVED"),
                        ),
                      ),
                    ),
                    Container(
                       height: 30,
                      child: Tab(
                        child: Align(
                          alignment: Alignment.center,
                          child: Text("PAST"),
                        ),
                      ),
                    ),
                  ]),
         
         
            ),
          ),
          body: TabBarView(children: [
             Padding(
               padding: const EdgeInsets.only(top: 9, ),
               child: Column(children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                  (model.busy ? CircularProgressIndicator() : dropdownProperty(model: model)),
                ],),
                 Expanded(child: Padding(
                   padding: const EdgeInsets.only(top: 30.0, left: 8.0, right: 8.0),
                   child: (model.loadingOthers ? loadingWidget()
                 :
                 (model.getErrorMessage == null ? 
                   UpcomingTab()
                   : errorWidget(model)
                   )
                  
                   ),
                 ),
                 )
               ],)
             ),

Padding(
               padding: const EdgeInsets.only(top: 9, left: 8.0, right: 8.0),
               child: Column(children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                 //  dropdownProperty(model: model),
                ],),
                 Expanded(child: Padding(
                   padding: const EdgeInsets.only(top: 30.0),
                   child:
                    (model.busy ? loadingWidget()
                 :
                 (model.getErrorMessage == null ? 
                   ApprovedTab()
                   : errorWidget(model)
                   ))
                 ),
                 )
               ],)
             ),

Padding(
               padding: const EdgeInsets.only(top: 9, left: 8.0, right: 8.0),
               child: Column(children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                   //dropdownProperty(),
                ],),
                Expanded(child: Padding(
                   padding: const EdgeInsets.only(top: 30.0),
                   child:
                    (model.busy ? loadingWidget()
                 :
                 (model.getErrorMessage == null ? 
                   PastTab()
                   : errorWidget(model)
                   ))
                 ),
                 )
                 
               ],)
             ),
          ]),
          floatingActionButton:FloatingActionButton(onPressed: () { 
            model.addReservation();
             },
            child: Icon(Icons.add, size: 30,),
              ),
        )
     );
  }


  dropdownProperty({MainReservationViewModel model}){
  //  return Text('Am here')
  return  Container(
        height: 40,
          width: MediaQuery.of(context).size.width /2,
          padding: EdgeInsets.symmetric(horizontal: 10.0),
          //color: AppColor.borderColor,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.only(
            topLeft:  const  Radius.circular(0.0),
            topRight: const  Radius.circular(30.0),
            bottomLeft:const  Radius.circular(0.0),
            bottomRight: const  Radius.circular(30.0),
                    ),
                                    color: AppColor.borderColor,
                                    border: Border.all(
                                        style: BorderStyle.solid, 
                                        width: 0.80, color: AppColor.borderColor),
                                  ),
                              child:  Center(
                                child: DropdownButton<GetProperties>(
                            isExpanded: true,
                             iconEnabledColor: AppColor.primary,
                                underline: SizedBox(),
                                hint: Text((model.firstName == null ? 'Properties' : model.firstName)),
                                value: _selectedProperty,
                                onChanged: (value) {
                                  setState(() {
                                    _selectedProperty = value;
                                     propertyID = value.id; //Return property ID
                                     model.propertyReservations(propertyID: propertyID);
                                      // print(propertyID);
                                   //  print(_selectedProperty.id);
                                    //  print(_selectedProperty);
                                  });
                                },
                                items: model.getPropertiesList().map((GetProperties lang) {
                                return DropdownMenuItem<GetProperties>(
                                          value: lang, 
                                          child: Text(lang.name.toString(), //Show Name 
                                          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),),
                                        );
                                            }).toList(),
                              
                              ),
                              ),
                            );
  
  }
  
   
  errorWidget(MainReservationViewModel model){
    return Center(
      child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(height: 30,),
                  Center(
                    child: Text(model.getErrorMessage,
                     textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.red,
                    fontSize: AppFontSizes.medium,
                    fontWeight: FontWeight.bold
                              ),),
                             
                  ),
                  verticalSpaceLarge,
                  GestureDetector(child: Padding(
                      padding: const EdgeInsets.all(1.0),
                      child: Container(
                        width: 150,
                        height: 50,
                        child: Material(
                        child: Center(
                            child: Text('Retry',
                            style: TextStyle(
                              color: AppColor.white,
                              fontSize: 17.0,
                              fontWeight: FontWeight.bold
                            ),),
                        ),
                        color: Color(0xFF45A1C9),
                        shape: RoundedRectangleBorder(
          borderRadius: new BorderRadius.circular(18.0),
              side: BorderSide(color: AppColor.borderColor)
      ),
                     
                  ),
                      ),
                    ),
                    onTap: (){
                      model.tab1Initialize();
                      model.setErrorMessage(erorr: null); //back to null
                    },
                          ),
                ],
              ),
    );
  }
  
  loadingWidget(){
   return Center(
      child: CircularProgressIndicator(
                    strokeWidth: 4,
                          valueColor: AlwaysStoppedAnimation<Color>(AppColor.primary, ),
                          backgroundColor: AppColor.borderColor,
                    ),
    );
  }
  }

