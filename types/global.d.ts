// Fixes the 'no index signature' error for global constructors.
declare global {
  // Enforce Error and String as known global constructor values
  var Error: ErrorConstructor
  var String: StringConstructor

  // NOTE: If you were adding CUSTOM properties (like a Mongoose connection cache),
  // you would add them here:
  // var myCustomGlobalProperty: string;
}

// Required to make this a module file that merges with the global scope
export {}
