import { ref } from "vue";
import axios from "axios";

import { useRouter, userRouter } from 'vue-router'

axios.defaults.baseURL = "http://rest-api.localhost/api/v1/"

export default function useSkills(){
    const skills = ref([])
    const skill = ref([])
    const errors = ref({})
    const router = useRouter()

    const getSkills = async () => {
        const response = await axios.get("skills")
        skills.value = response.data.data
    }

    const getSkill = async (id) => {
        try{
            const response = await axios.get("skills/" + id)
            skill.value = response.data.data
        }catch (error){
            console.error('Error fetching skill: ', error)
            router.push({name: "SkillIndex"})
        }
    }

    const storeSkill = async (data) => {
        try{
            await axios.post("skills", data)
            // push to the SkillIndex
            router.push({name: "SkillIndex"})
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const updateSkill = async (id) =>  {
        try{
            await axios.put("skills/" + id, skill.value)
            router.push({name: "SkillIndex"})
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const destroySkill = async (id) => {
        if(!window.confirm("Are you sure?")){
            return
        }
        await axios.delete("skills/" + id)
        await getSkills()
    }

    return {
        skills,
        skill,
        errors,
        getSkills,
        getSkill,
        storeSkill,
        updateSkill,
        destroySkill
    }
}