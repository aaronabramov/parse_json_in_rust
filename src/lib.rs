extern crate rustc_serialize;
use rustc_serialize::json::Json;
use std::fs::File;
use std::io::Read;
use std::ffi::CString;

#[no_mangle]
pub extern fn json() -> CString {
    let mut file = File::open("data.json").unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();

    let json = Json::from_str(&data).unwrap();
    return CString::new(json.to_string()).unwrap()
}
