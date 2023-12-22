<script setup>
import PageHeader from '../../components/PageHeader.vue'
import useSkills from '../../composables/skills'
import { onMounted } from 'vue';

const pageTitle = 'Skills'

const { skills, getSkills, destroySkill, pagination } = useSkills()
onMounted(() => getSkills())

</script>
<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <!-- Content Header (Page header) -->
        <PageHeader :pageTitle="pageTitle" />

        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Title</h3>

                    <div class="card-tools">
                        <router-link :to="{ name: 'SkillCreate' }" class="btn btn-sm btn-flat btn-success">Create
                            New</router-link>
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-border">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="skill in skills" :key="skill.id">
                                <td>{{ skill.id }}</td>
                                <td>{{ skill.name }}</td>
                                <td>{{ skill.slug }}</td>
                                <td>
                                    <router-link :to="{ name: 'SkillEdit', params: { id: skill.id } }"
                                        class="btn btn-sm btn-success">
                                        Edit
                                    </router-link>
                                    <button @click="destroySkill(skill.id)" class="btn btn-sm btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <div v-if="pagination">
                        <ul class="pagination pagination-month justify-content-center">
                            <li v-for="link in pagination.links" :key="link.label" :class="{ active: link.active }">
                                <router-link :to="{ path: link.url }">{{ link.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /.card-footer-->
            </div>
            <!-- /.card -->

        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>
