﻿ls.refresh(true);
var hostAdapter = new TypeScript.Services.LanguageServiceShimHostAdapter(host);
var compiler = new TypeScript.Services.LanguageServiceCompiler(hostAdapter);
var emitResult = compiler.emit(host.FileName, host.ResolvePath);
var result = JSON.stringify({result: emitResult});
host.updateCompilerResult(result);