
<template>
   <KeepAlive>
<b-card-code>
<validation-observer ref="simpleRules">
  <b-form v-if="!editProject" @submit.prevent style="">
     
    <b-row>


      <!--  name -->
      <b-col cols="12">
        <b-form-group
          label="اسم المشروع"
          label-for="v-first-name"
        >
         <validation-provider
              #default="{ errors }"
              name="اسم المشروع"
              rules="required"
            >
         
           <b-form-input
            v-model="name"
            id="v-first-name"
            :state="errors.length > 0 ? false:null"
            placeholder="اسم "
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="اختار"
          label-for="v-drop"
        >
 <b-dropdown
     
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      :text="ddTestVm.ddTestSelectedOption"
      block
      center
      split-variant="outline-primary"
      variant="outline-primary"
      class="mt-2"
      style="width:100%"
      v-on:change="changeItem"
    >
      <b-dropdown-item disabled value="0">Select an Item</b-dropdown-item>
      <b-dropdown-item v-for="option in ddTestVm.options" 
                        :key="option.value" 
                        :value="option.text"
                        @click="ddTestVm.ddTestSelectedOption = option.value">
        {{option.value}}
      </b-dropdown-item>           
      
    </b-dropdown>
     <span>Selected: {{ ddTestVm.ddTestSelectedOption }}</span>
</b-form-group>
 </b-col>
       <!--  departement -->
      <b-col cols="12">
        <b-form-group
          label="اسم الجهه"
          label-for="v-departement"
        >
           <validation-provider
              #default="{ errors }"
              name="اسم الجهه"
              rules="required"
            >
          <b-form-input
          
            id="v-departement"
            v-model="departement"
            :state="errors.length > 0 ? false:null"
            placeholder="اسم الجهه"
          />
          <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>

     <!--  location -->
      <b-col cols="12">
        <b-form-group
          label="الموقع"
          label-for="v-location"
        >
         <validation-provider
              #default="{ errors }"
              name="اسم الموقع"
              rules="required"
            >
          <b-form-input
          
            id="v-location"
            v-model="location"
            :state="errors.length > 0 ? false:null"
            placeholder="اسم الموقع"
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>

        </b-form-group>
      </b-col>
     <!--  status -->
      <b-col cols="12"
      style="
  padding: 0rem 1rem;
  ">
        <b-form-group
          label="الحاله "
          label-for="v-status"
        >
          <validation-provider
              #default="{ errors }"
              name="الحاله"
              rules="required"
            >
          <b-form-radio
      v-model="status"
      checked
      name="some-radios"
      :state="errors.length > 0 ? false:null"
      value="مكتمل"
      style="display: inline-block;;padding: 1rem 1.5rem;
  vertical-align: middle;"
    >
      مكتمل
    </b-form-radio>
    <b-form-radio
      v-model="status"
      name="some-radios"
      :state="errors.length > 0 ? false:null"
      value="غير مكتمل"
      style="display: inline-block;;padding: 1rem 1.5rem;
  vertical-align: middle;"
    >     غير مكتمل
    </b-form-radio>
    <small class="text-danger">{{ errors[0] }}</small>
      </validation-provider>

        </b-form-group>
      </b-col>

     <!--  name -->
      <b-col cols="12">
        <b-form-group
          label=" المطور العقاري"
          label-for="v-"
        >
        <validation-provider
              #default="{ errors }"
              name="اسم المطور"
              rules="required"
            >
          <b-form-input
          
            id="v-developer"
            v-model="developer"
            :state="errors.length > 0 ? false:null"
            placeholder="اسم المطور العقاري"
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>

        </b-form-group>
      </b-col>

<b-form-group label="اختيار من متعدد">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        name="flavour-2"
        class="demo-inline-spacing"
      >
        <b-form-checkbox v-for="option in checkOptions" :key="option.value" :value="option.value">
          {{option.value}}
                  </b-form-checkbox>
      
      </b-form-checkbox-group>
    </b-form-group>
    
      Selected: <strong>{{ selected }}</strong>
   



      <!-- submit and reset -->
      <b-col cols="12">
        <b-button
        @click.prevent="validationForm"
        
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          إضافه
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="primary"
          @click="this.reset"
        >
          إعادة تهيئة
        </b-button>
          <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="back"
          variant="primary"
          style="margin-right:15px;"
          @click="this.back"
        >
          رجوع
        </b-button>
      </b-col>
      
    </b-row>
   
  </b-form>
   
  <b-form v-else @submit.prevent style="">
     
    <b-row>


      <!--  name -->
      <b-col cols="12">
        <b-form-group
          label="اسم المشروع"
          label-for="v-first-name"
        >
        <validation-provider
              #default="{ errors }"
              name="اسم المشروع"
              rules="required"
            >
          <b-form-input
         
            id="v-first-name"
            :state="errors.length > 0 ? false:null"
            v-model="project.fullName"
            placeholder="اسم المشروع"
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>
        </b-form-group>
      </b-col>
     <b-col cols="12">
        <b-form-group
          label="اختار"
          label-for="v-drop"
        >
        
 <b-dropdown
     
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      :text="project.selectedOption"
      block
      center
      split-variant="outline-primary"
      variant="outline-primary"
      class="mt-2"
      style="width:100%"
      v-on:change="changeItem"
    >
      <b-dropdown-item disabled value="0">Select an Item</b-dropdown-item>
      <b-dropdown-item v-for="option in ddTestVm.options" 
                        :key="option.value" 
                        :value="option.text"
                        @click="project.selectedOption = ddTestVm.ddTestSelectedOption = option.value">
        {{option.value}}
      </b-dropdown-item>           
      
    </b-dropdown>
     
</b-form-group>
 </b-col>
       <!--  departement -->
      <b-col cols="12">
        <b-form-group
          label="اسم الجهه"
          label-for="v-departement"
        >
        <validation-provider
              #default="{ errors }"
              name="اسم ألجهه"
              rules="required"
            >
          <b-form-input
            id="v-departement"
            :state="errors.length > 0 ? false:null"
            v-model="project.departement"
            placeholder="اسم الجهه"
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>
        </b-form-group>
      </b-col>

     <!--  location -->
      <b-col cols="12">
        <b-form-group
          label="الموقع"
          label-for="v-location"
        >
        <validation-provider
              #default="{ errors }"
              name="اسم الموقع"
              rules="required"
            >
          <b-form-input
            id="v-location"
            :state="errors.length > 0 ? false:null"
            v-model="project.location"
            placeholder="اسم الموقع"
          />
          <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>
        </b-form-group>
      </b-col>
      <!--  status -->
      <b-col cols="12"
      style="
  padding: 0rem 1rem;
  ">
         <b-form-group
          label="الحاله "
          label-for="v-status"
        >
          <validation-provider
              #default="{ errors }"
              name="الحاله"
              rules="required"
            >
          <b-form-radio
      v-model="project.status"
      checked
      name="some-radios"
      :state="errors.length > 0 ? false:null"
      value="مكتمل"
      style="display: inline-block;;padding: 1rem 1.5rem;
  vertical-align: middle;"
    >
      مكتمل
    </b-form-radio>
    <b-form-radio
      v-model="project.status"
      name="some-radios"
      :state="errors.length > 0 ? false:null"
      value="غير مكتمل"
      style="display: inline-block;;padding: 1rem 1.5rem;
  vertical-align: middle;"
    >     غير مكتمل
    </b-form-radio>
    <small class="text-danger">{{ errors[0] }}</small>
      </validation-provider>

        </b-form-group>
      </b-col>

     <!--  name -->
      <b-col cols="12">
        <b-form-group
          label=" المطور العقاري"
          label-for="v-"
        >
          <validation-provider
              #default="{ errors }"
              name="اسم المطور"
              rules="required"
            >
          <b-form-input
            id="v-developer"
            :state="errors.length > 0 ? false:null"
            v-model="project.developer"
            placeholder="اسم المطور العقاري"
          />
           <small class="text-danger">{{ errors[0] }}</small>
           </validation-provider>
        </b-form-group>
      </b-col>

<b-form-group label="اختيار من متعدد">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="project.options"
        name="flavour-2"
        class="demo-inline-spacing"
      >
        <b-form-checkbox v-for="option in checkOptions" :key="option.value" :value="option.value">
          {{option.value}}
                  </b-form-checkbox>
      
      </b-form-checkbox-group>
    </b-form-group>
    
      Selected: <strong>{{ project.options }}</strong>
      
      <!-- submit and reset -->
      <b-col cols="12">
        <b-button
        @click.prevent="validationForm"
       
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          تعديل
        </b-button>
         <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="primary"
          @click="this.reset"
        >
          إعادة تهيئة
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="back"
          variant="primary"
          style="margin-right:15px;"
          @click="this.back"
        >
          رجوع
        </b-button>
      </b-col>
      
    </b-row>
   
  </b-form>
</validation-observer>
</b-card-code>
 </KeepAlive>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormCheckboxGroup,BFormRadio,BDropdown, BDropdownItem, BDropdownDivider,BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store/index'
import router from '@/router'
import { ValidationProvider, ValidationObserver, localize  } from 'vee-validate'
import { required} from '@validations'



export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormCheckboxGroup,
    BFormRadio,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  props: ['project'],
  data (){
        return{
          selected:[],
           checkOptions: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
          
            ddTestVm: {
                    originalValue: [],
                    ddTestSelectedOption: "Value1",
                    disabled: false,
                    readonly: false,
                    visible: true,
                    color: "",
                    options: [
                        {
                            "value": "Value1",
                            "text": "Value1Text"
                        },
                        {
                            "value": "Value2",
                            "text": "Value2Text"
                        },
                        {
                            "value": "Value3",
                            "text": "Value3Text"
                        }
                    ]
                },
            
            // ? Default locale for VeeValidate is 'en'
            locale: 'ar',
            // for validation
            required,

            name:null,
            departement:null,
            location:null,
            status:null,
            developer:null,
            editProject:false,
            projectReset:this.project,
           
   
    }
    },
    mounted(){
        //switch to arabic in validation
        localize(this.locale)

        if(this.project ){
          this.editProject = true;
          console.log(this.$route.name);
          
        }
    },
    methods:{
      
      validationForm() {
        if(!this.editProject){  
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.addProject();
        }
      })
        }
        else{
             this.$refs.simpleRules.validate().then(success => {
           if (success) {
               // eslint-disable-next-line
               this.editProj();
        }
      })
        }
    },

        addProject(){
        
            const project= {
            id: new Date().toString(),
            fullName:this.name,
            departement:this.departement,
            location:this.location,
            status:this.status,
            developer:this.developer,
            selectedOption:this.ddTestVm.ddTestSelectedOption,
            options:this.selected
            }
            store.commit('setProjects',project);
            router.push('/projects');
        },
        editProj(){
          const project= {
            id:this.project.id,
            fullName:this.project.fullName,
            departement:this.project.departement,
            location:this.project.location,
            status:this.project.status,
            developer:this.project.developer,
            selectedOption:this.ddTestVm.ddTestSelectedOption,
            options:this.project.options
            };
          
          store.commit('setProject',project);
          router.push('/projects');
        },
        reset(){
          if(this.editProject){
          this.projectReset.fullName= null;
          this.projectReset.departement= null;
          this.projectReset.location= null;
          this.projectReset.status= null;
          this.projectReset.developer= null;
          this.ddTestVm.ddTestSelectedOption = "Value1"
          this.projectReset.options= null;
          this.selected = [];

          }
          else{
            this.name=null,
            this.departement=null,
            this.location=null,
            this.status=null,
            this.developer=null,
            this.ddTestVm.ddTestSelectedOption = "Value1"
            this.options = null,
            this.selected = []
          }
        },
        back(){
          router.push('/projects');
        }
    },

  directives: {
    Ripple,
  },
}
</script>
