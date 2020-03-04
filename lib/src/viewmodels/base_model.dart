import 'package:flutter/widgets.dart';
import 'package:hostapp/src/locator.dart';
import 'package:hostapp/src/model/UserDetails.dart';
import 'package:hostapp/src/service/authentication.dart';

class BaseModel extends ChangeNotifier {
  final AuthService _authService = locator<AuthService>();

  bool _busy = false;
  bool loadingOthers = false;
  bool get busy => _busy;

  void setBusy(bool value) {
    _busy = value;
    notifyListeners();
  }

  void loadingOther(bool value) {
    loadingOthers = value;
    notifyListeners();
  }
}
