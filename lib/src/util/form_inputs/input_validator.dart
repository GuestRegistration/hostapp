import 'package:hostapp/src/util/form_inputs/demo_data.dart';

class InputValidator {
  const InputValidator();

  bool validateInput(type, String value,) {
    if (type.runtimeType == InputType) {
      switch (type as InputType) {
        case InputType.email:
          return _validateEmail(value);
        case InputType.telephone:
          return _validatePhoneNumber(value);
          break;
        default:
          return true;
      }
    }
  
    return false;
  }
  bool _validateEmail(String value) {
    RegExp emailRegExp = RegExp(r"(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)");
    return emailRegExp.hasMatch(value);
  }

  bool _validatePhoneNumber(String value) {
    RegExp telRegExp = RegExp(r"(^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$)");
    return telRegExp.hasMatch(value);
  }

}
