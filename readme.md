# Todo App

## Requirement

We need to make 4 functionality for users to use

1. Add new Todo Task
2. Remove particular Task
3. Read a Task
4. List all Todo Tasks

### Add new Todo Task

- User will input two values as command line input for new Todo Task

  1.  Title
  2.  Description

- These both will be string values and mandatory
- Then add into data.txt if that title is not already present in the data file

### Remove particular Task

- User Input setting is done
- Now let do coding for task to get deleted if already present in data.txt file
- If task not found throw a message to inform user

## Result

### Add new Todo Task

#### Command

`node index.js add -t "prepare node slides" -d "node slide to be prepared before saturday"`

#### Output

![](https://i.imgur.com/PTQNio0.png)

### Remove particular Task

#### Command

`node index.js delete -t "prepare node slides"`

#### Output

![](https://i.imgur.com/ZHYhVHB.png)

### RList all Todo Tasks

#### Command

`node index.js all`

#### Output

![](https://i.imgur.com/l5vycUy.png)
