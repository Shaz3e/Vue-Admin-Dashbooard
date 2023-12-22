<script setup>
import PageHeader from '../../components/PageHeader.vue'
import { reactive } from "vue"
import useSkills from '../../composables/skills'

const pageTitle = 'Skills'

const { storeSkill, errors } = useSkills()

const form = reactive({
    name: "",
    slug: "",
})

</script>
<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <PageHeader :pageTitle="pageTitle" />

        <!-- Main content -->
        <section class="content">

            <form @submit.prevent="storeSkill(form)">
                <!-- Default box -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Title</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="name">Skill
                                Name</label>
                            <input type="text" class="form-control" id="name" v-model="form.name">
                            <div v-if="errors.name">
                                <span class="text-red">
                                    {{ errors.name[0] }}
                                </span>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="slug" class="">Slug</label>
                            <input type="text" id="slug" v-model="form.slug" class="form-control">
                            <div v-if="errors.slug">
                                <span class="text-red">
                                    {{ errors.slug[0] }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-success">Create Skill</button>
                    </div>
                    <!-- /.card-footer-->
                </div>
                <!-- /.card -->
            </form>

        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>