use interoptopus::util::NamespaceMappings;
use interoptopus::{Error, Interop};

#[test]
#[cfg_attr(miri, ignore)]
fn bindings_csharp() -> Result<(), Error> {
    use interoptopus_backend_csharp::{Config, Generator};

    Generator::new(
        Config {
            class: "RustComponentInterop".to_string(),
            dll_name: "rust_component".to_string(),
            namespace_mappings: NamespaceMappings::new("Example.RustComponent"),
            ..Config::default()
        },
        rust_component::component_inventory(),
    )
    .write_file("target/RustComponentInterop.cs")?;

    Ok(())
}
