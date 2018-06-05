
// It will be correctly invoked from app_1.js
//		because it is global.
// console.log('hello');

// It can execute on javascript engine base 
//		but does not in node's global object
// That means it can't execute from node itself commands.
//		except for its execution command.
/// ======== It works too! =======================
var hello = () => {

	console.log('hello!!');

}

// hello();
// =============================================

// module is one of the global objects
// module : global object like process
// module is able to contain non global objects
// 		such as variable, function, object, calss and so on.
//		through "exports" property
// "exports" property can be an variable, function, and object "themsevles"
module.exports = hello;