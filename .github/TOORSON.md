# To Orsoniks
## Why this repo?
Hello Orson!



## What it enables

+ The use of country-specific locale codes (like `fr-FR` instead of just `fr`) allows to have different versions of the localization for different regions if needed.

+ This structure allows to handle localization of media or more text files, not only a single json file.

+ It allows the community to have an overview of the localization status of each language in the automated `README.md`, and track the incompatibilities via automated reports.

+ It sorts the locales indifferent categories via the `Locales/index.json` file :
    - `completelocales` : locales that have text and media files compatible with the game
    - `validtextlocales` : locales that have text files compatible with the game, but no media files
    - `alllocales` : all locales, including incomplete ones.

    This allows you ingame to only propose to the player the locales that are actually usable if you want to.

+ It provides guidelines and procedures to guide new contributors.

+ The credits system allows you to reference contributors ingame if you want to.

## How to integrate it within your game
## What is left to discuss

- You may want to pick a license for this repository, separating in rights between code, official game assets, and community contributed assets.

- If you do end up integrating this, you may want to disable the notification from commits of `github-actions[bot]` to avoid spamming your notifications with automated localization audit commits.