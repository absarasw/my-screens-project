/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */


const sk = document.querySelector('helix-sidekick');
sk.addEventListener('custom:publish-channel', async (e) => {
    if(e.detail) {
      console.log(JSON.stringify(e.detail));
    } else {
      console.log("details not available");
    }
    let response;
  const options = {
    method: 'POST',
  };
  const config = e.detail.data.config;
  const ref = config.ref;
  const repo = config.repo;
  const owner = config.owner;
  const host = config.host;
  const path = status.webPath;
    
  response = await fetch(`https://admin.hlx.page/live/${owner}/${repo}/${ref}/${path}`, options);

  if (response.ok) {
    console.log(`Document Published at ${new Date().toLocaleString()}`);
  } else {
    throw new Error(`Could not previewed. Status: ${response.status}`);
  }


  response = await fetch(`https://admin.hlx.page/cache/${owner}/${repo}/${ref}/${path}`, options);
    
  if (response.ok) {
    console.log(`Purge cache ${new Date().toLocaleString()}`);
   } else {
     throw new Error(`Could not purge cache. Status: ${response.status}`);
  }

  const sheetPath = `${path}.json`;

  response = await fetch(`https://admin.hlx.page/live/${owner}/${repo}/${ref}/${sheetPath}`, options);

  if (response.ok) {
    console.log(`Document Published at ${new Date().toLocaleString()}`);
  } else {
    throw new Error(`Could not previewed. Status: ${response.status}`);
  }

  response = await fetch(`https://admin.hlx.page/cache/${owner}/${repo}/${ref}/${sheetPath}`, options);
    
  if (response.ok) {
    console.log(`Purge cache ${new Date().toLocaleString()}`);
   } else {
     throw new Error(`Could not purge cache. Status: ${response.status}`);
  }
    
  const status = e.detail.data.status;
  const prodUrl = `{host}{path}`;
  window.location.replace(prodUrl);
  
});
