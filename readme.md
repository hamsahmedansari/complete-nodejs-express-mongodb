# Request

### Installation

`npm i request`

## Basic Request

### Syntax

`request(options, callback)`

### Options

```
const options = {
   url: 'https://any_API_URL',

   headers: {
 	 anyKey: “Any value required by api provider”,
       Accept: "application/json",
       username: "pakistan",
       password: "356ae6e1"

}
```

### Callback

`function (error, response)`

## Oxford Dictionary API

Checkout there [Website](https://developer.oxforddictionaries.com/) and Get Your API key
** Use Your Own Api key by Changing in OxfordDictionaryAPI.js **

### Add Own Api

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  json: true,
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
```

## Output

![](https://i.imgur.com/iPpyEwa.png)

## Get Response in JSON

Add Following Code in ** Request's Option **

### Before

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
```

### After

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  json: true,
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
```

## Output

![](https://i.ibb.co/0sgjqjF/Screenshot-from-2019-06-29-16-30-28.png)
