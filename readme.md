# Sample Angular app using OpenReplay's tracker

Since OpenReplay does not yet provide a plugin to capture request information for Angular projects (like it does for Fetch and Axios), you can use this project as a guide.

## Running the code

To get this project working:

1. Make sure you have installed the [Angular CLI tool](https://angular.io/guide/setup-local) (click the link if you don't).
2. Add your project key in the `src/app/replay-session.service.ts` file.
3. Clone the repo
4. Type:

```
$ npm install --legacy-peer-deps
$ ng serve --open
```

## More questions?

If you have any issues setting up the Tracker on your Angular project, please contact us on our [Slack community](https://slack.openreplay.com/) and ask our devs directly!
