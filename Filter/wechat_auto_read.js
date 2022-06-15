var body = $response.body
    .replace(/<\/script>/, 'setTimeout(()=>window.history.back(),6000); </script>');
$done({ body });
