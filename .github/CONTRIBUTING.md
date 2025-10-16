# Contributing to the Locales

We welcome contributions to the localization files! Make sure you are in touch with the community on the [discord channel](https://discord.com/channels/955738554129063947/1298240970764324914).
Different threads are available for different languages. Here are some guidelines to help you get started:

## Repository Structure

You will find the localization files in the `Locales` directory. The reference locale is `en` (English). Each language has its own subdirectory named according to its locale code (e.g., `es-ES` for Spain Spanish).

The structure of each locale directory mirrors that of the reference locale. The files should have _exactly the same names and structure as those in the `en` directory_. For media files (non .json), be careful to keep the same file specifications (format, dimensions, transparency, etc.) as the reference files.

## Getting Started

1. **Fork the Repository and Clone it**: Start by forking this repository to your GitHub account and then clone it to your local machine.

2. Keep Your Fork Updated: Regularly sync your fork with the upstream repository to stay updated with the latest changes.

### Existing Locales

### Creating a New Locale

## Guidelines for Editing Localization Files

1. Keep the json entries sorted similarly to the reference locale (`en`).
   This helps in maintaining consistency and makes it easier to spot missing entries. Although report audits will help you find missing entries, it's best to keep the files organized from the start.
2. Use a text editor or IDE that supports JSON formatting and validation to avoid syntax errors.
3. You can run

## How the Localization Audit Works
You can see in the [README](../README.md) that a table summarizes the status of each locale, keeping track of:
- The number of files that are OK (compatible with the game)
- The number of files that have mismatches (incompatible with the game)
- The number of missing files (compared to the reference locale `en`).

A more detailed report is generated as a GitHub Actions artifact, which you can access from the "Actions" tab of the repository.
This is done every time a commit is pushed to the repository, helping you track the progress of your localization efforts.

> You should NEVER feel pressured to have a complete locale. Even partial contributions are valuable and appreciated! Also, you should not pressure others to contribute. Everyone contributes in their own time and way.

Should this process cease to work, please open an issue or contact one of the maintainers. You can always manually check the files against the reference locale using a JSON diff tool such as [jsondiff.com](https://jsondiff.com/).

## FAQ
### How do I know if my locale is complete?
### 



