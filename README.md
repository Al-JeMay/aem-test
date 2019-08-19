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

```python
<!-- custom tagging input component :::: START-->
    <app-tag-input
      [formRegister]="formRegister"
      (removeTags)="removeTags($event)"
      (addTags)="addTags($event)">
    </app-tag-input>
<!-- custom tagging input component :::: END-->
```

[Live Demo](https://aem-test-5c1a4.firebaseapp.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
