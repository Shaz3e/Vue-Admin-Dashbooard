<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ pageTitle }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'home'}">Home</router-link></li>
                        <li class="breadcrumb-item active">{{ pageTitle }}</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
</template>
<script>
export default {
    name: 'PageHeader',
    props: ['pageTitle']
}
</script>