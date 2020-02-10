import 'package:flutter/material.dart';
import 'package:hostapp/src/viewmodels/home_view_model.dart';
import 'package:hostapp/src/widget/app_drawer/app_drawer.dart';
import 'package:hostapp/src/widget/base_model.dart';
import 'package:hostapp/src/widget/base_widgets.dart';
import 'package:provider_architecture/provider_architecture.dart';

/// Contains the widgets that will be used for Mobile layout of home,
/// portrait
class HomeMobilePortrait extends ProviderWidget<HomeViewModel>{
    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
    
  @override
  Widget build(BuildContext context, HomeViewModel model) {
    return Scaffold(
      key: _scaffoldKey,
      drawer: AppDrawer(),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(16),
            child: IconButton(
              icon: Icon(Icons.menu, size: 30),
              onPressed: () {
                _scaffoldKey?.currentState?.openDrawer();
              },
            ),
          ),
          Expanded(child: Center(child: Text(model.title),))
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => model.updateTitle(),),
    );
  }
}

 //and landscape
class HomeMobileLandscape extends ProviderWidget<HomeViewModel> {
   HomeMobileLandscape({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context, HomeViewModel model) {
    return Scaffold(
      body: Row(children: <Widget>[
        AppDrawer()
      ],),
    );
  }
  }
