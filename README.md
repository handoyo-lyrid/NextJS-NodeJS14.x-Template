# NextJS-NodeJS14.x-Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). With .lyrid-definition.yml packaged together as a default template.

### Lyrid now supports NextJS12 natively.
With our newest update, user no longer need to pack NextJS into ExpressJS. Just copy the `.lyrid-definition.yml` file to
project root and configure the file according to your liking.
```bash
name: <Application Name>
description: <Application Description>
ignoreFiles: .git .next node_modules
modules:
  - name: <Module Name>
    language: nodejs14.x
    web: nextjs
    description: <Module Description>
    functions:
      - name: <Function Name>
        entry: entry.js
        description: the entry point for the function
```

### Deploying on Lyrid
Start uploading the project using [lc code submit !](https://docs.lyrid.io/installation)