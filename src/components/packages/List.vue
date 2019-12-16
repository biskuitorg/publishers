<template>
    <div class="uk-section uk-section-default">
        <div class="uk-container">
            <h3>Packages</h3>
            <p>All your packages</p>
            <table class="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Version</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>biskuit/helloworld</td>
                        <td>biskuit-extension</td>
                        <td>1.0.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="file-edit"></a></li>
                                <li><a uk-icon="trash"></a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>mirkobrombin/icecream</td>
                        <td>biskuit-theme</td>
                        <td>0.1.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="file-edit"></a></li>
                                <li><a uk-icon="trash"></a></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>mirkobrombin/example</td>
                        <td>pagekit-extension</td>
                        <td>2.1.0</td>
                        <td>
                            <ul class="uk-iconnav">
                                <li><a uk-icon="file-edit"></a></li>
                                <li><a uk-icon="trash"></a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'packages',
        metaInfo: {
            title: 'Packages'
        }
    }
</script>