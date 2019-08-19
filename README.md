# Custom Tagging Input - Angular AEM Test

Create a custom **tagging input** component that will work for both **reactive form** and **model**.

## Installation
Run as Angular project.

Step 1
```bash
npm install
```
Step 2
```bash
ng serve
```
## Usage
Its property can be vary, this just an example on how to use it

```python
<app-tag-input
  [formGroup]="formGroup"
  (removeSkillHandler)="removeSkillHandler($event)"
  (addSkillHandler)="addSkillHandler($event)">
</app-tag-input>
```
## Live Demo
[Live Demo](https://aem-test-5c1a4.firebaseapp.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
