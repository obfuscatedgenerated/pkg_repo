# Contributing a new package

Thank you for your interest in OllieOS! Please fill out the details below:

## Details

### Pre-checks

- [ ] This is a PR for a **new package**, and not a [new version of an existing package](https://github.com/obfuscatedgenerated/pkg_repo/compare?template=pkg_update)
- [ ] I have checked that my package name is not already [in use](https://github.com/obfuscatedgenerated/pkg_repo/tree/main/pkgs)
- [ ] I understand that this is not a contribution directly to the OllieOS source code
- [ ] I have used Typescript and used [ollieos types](https://github.com/obfuscatedgenerated/obfuscatedgenerated.github.io/tree/types) which have been kept up to date
- [ ] I have used an up to date version of [pkgbuild](https://github.com/obfuscatedgenerated/ollieos_pkgbuild) to build the package (in production mode) and have used correct details for this
- [ ] This PR contributes the **built package files** (as output to dist) under a subdirectory of [/pkgs](https://github.com/obfuscatedgenerated/pkg_repo/tree/main/pkgs) using the name of the package
- [ ] If I have used privilege requests or spawned processes with privilege, this has been done in a responsible and honest manner
- [ ] My build process outputs reproducible .js files (if you are using pkgbuild unmodified, and aren't doing anything weird with system date/time etc then it probably is fine)

### Package name
The name of your package, as it builds to (found in package.json)



### Repository URL
Your code must be public (at least source available) to be accepted unless already agreed upon.



### Elevator pitch
Give a short summary of what the package is for and how it is used.







### Final check

- [ ] I understand that once my PR is merged, the package will be publicly available (near) immediately
