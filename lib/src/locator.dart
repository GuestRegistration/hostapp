
import 'package:hostapp/src/service/CloudStorageService.dart';
import 'package:hostapp/src/service/FirestoreService.dart';
import 'package:hostapp/src/service/authentication.dart';
import 'package:hostapp/src/service/dialog_service.dart';
import 'package:hostapp/src/service/navigation_service.dart';
import 'package:hostapp/src/util/customFunctions.dart';
import 'package:get_it/get_it.dart';

//Instead of creating instance of an Object, Multiple times
//Dependency inject solve it by creating this code.

GetIt locator = GetIt.instance;

void setupLocator() {
locator.registerLazySingleton(() => AuthService());
locator.registerLazySingleton(() => CustomFuntion());
locator.registerLazySingleton(() => NavigationService());
locator.registerLazySingleton(() => DialogService());
locator.registerLazySingleton(() => FirestoreService());
locator.registerLazySingleton(() => CloudStorageService());
}

 //Creating an injection.
class MyInjection{
  var customlogic = locator<CustomFuntion>();
  var authService = locator<AuthService>();
}
