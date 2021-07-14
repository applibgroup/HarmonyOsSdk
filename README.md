# HarmonyOsSdk
The HMOS SDK required for the app compilation


`on: [push]

jobs:
  Build and Analyse:
    runs-on: windows-latest
    name: Build and Analyse
    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - id: main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        uses: applibgroup/HarmonyOsSdk@v1
      - name: Upload Artifact
        uses: actions/upload-artifact@v2
        with: 
          name: assets-for-download
          path: build\outputs\hap\debug\phone`
