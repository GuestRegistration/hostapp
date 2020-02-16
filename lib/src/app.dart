import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/Dashboard.dart';
import 'package:hostapp/src/service/auth_bloc_provider.dart';


class PasswordlessApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AuthBlocProvider(
      child: MaterialApp(
       //   theme: new ThemeData(scaffoldBackgroundColor: const Color(0xff151232)),
        theme: new ThemeData(scaffoldBackgroundColor: Colors.white),
        home: Scaffold(
          body: Dashboard(),
        ),
      ),
    );
  }
}
