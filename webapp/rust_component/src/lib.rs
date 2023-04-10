use interoptopus::{ffi_function, ffi_type, function, Inventory, InventoryBuilder};

/// Simple vector type
#[ffi_type]
#[repr(C)]
pub struct Vec2 {
    pub x: f32,
    pub y: f32,
}

/// Double a vector
#[ffi_function]
#[no_mangle]
pub extern "C" fn double_vector(input: Vec2) -> Vec2 {
    let result = Vec2 {
        x: input.x * 2.0,
        y: input.y * 2.0
    };
    result
}

// This will create a function `component_inventory` which can produce
// an abstract FFI representation (called `Library`) for this crate.
pub fn component_inventory() -> Inventory {
    {
        InventoryBuilder::new().register(function!(double_vector)).inventory()
    }
}
