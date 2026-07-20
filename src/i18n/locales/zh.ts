export const zh = {
  attachmentCollector: {
    confirm: {
      part1: '是否要递归收集文件夹中所有笔记的附件？',
      part2: '此操作无法撤销。'
    },
    progressBar: {
      message: '正在收集附件 {{iterationStr}} - \'{{noteFilePath}}\'。',
      title: '正在收集附件...'
    }
  },
  buttons: {
    copy: '复制',
    copyAll: '全部复制',
    move: '移动',
    previewAttachmentFile: '预览附件文件',
    select: '选择',
    skip: '跳过'
  },
  collectAttachmentUsedByMultipleNotesModal: {
    content: {
      part1: '附件',
      part2: '被多个笔记引用。'
    },
    heading: '处理被多个笔记使用的附件',
    shouldUseSameActionForOtherProblematicAttachmentsToggle: '对其他有问题的附件使用相同操作'
  },
  commands: {
    collectAttachmentsCurrentFolder: '收集当前文件夹中的附件',
    collectAttachmentsCurrentNote: '收集当前笔记中的附件',
    collectAttachmentsEntireVault: '收集整个仓库中的附件',
    moveAttachmentToProperFolder: '将附件移动到正确的文件夹'
  },
  menuItems: {
    collectAttachmentsInFile: '收集文件中的附件',
    collectAttachmentsInFiles: '收集多个文件中的附件'
  },
  moveAttachmentToProperFolder: {
    progressBar: {
      message: '正在将附件移动到正确的文件夹 {{iterationStr}} - \'{{attachmentFilePath}}\'。',
      title: '正在移动附件...'
    },
    unusedAttachment: '附件 {{attachmentPath}} 未被任何笔记使用，因此不会移动。'
  },
  moveAttachmentToProperFolderUsedByMultipleNotesModal: {
    content: {
      part1: '附件',
      part2: '被多个笔记引用。',
      part3: '请选择要将附件复制到的笔记。'
    },
    heading: '处理被多个笔记使用的附件',
    shouldUseSameActionForOtherProblematicAttachmentsToggle: '对其他有问题的附件使用相同操作'
  },
  notice: {
    collectingAttachments: '正在为 \'{{noteFilePath}}\' 收集附件',
    collectingAttachmentsCancelled: '附件收集已取消。详情请查看控制台。',
    couldNotResolveTemplatePath: '无法解析模板路径 \'{{template}}\'。详情请查看控制台。',
    generatedAttachmentFileNameIsInvalid: {
      part1: '生成的附件文件名 \'{{path}}\' 无效。\n{{validationMessage}}\n请检查',
      part2: '设置。'
    },
    notePathIsIgnored: '笔记路径已被忽略'
  },
  obsidianDevUtils: {
    buttons: {
      cancel: '取消',
      ok: '确定'
    },
    dataview: {
      itemsPerPage: '每页项目数：',
      jumpToPage: '跳转到页面：'
    },
    notices: {
      attachmentIsStillUsed: '附件 {{attachmentPath}} 仍被其他笔记使用，因此不会删除。',
      unhandledError: '发生未处理的错误。请查看控制台了解详情。'
    }
  },
  pluginSettings: {
    attachmentRenameMode: {
      all: {
        description: '重命名所有文件。',
        displayText: '全部'
      },
      none: {
        description: '保留原文件名。',
        displayText: '不重命名'
      },
      onlyPastedImages: {
        description: '仅重命名直接从剪贴板粘贴的 PNG 图片，通常用于截图。',
        displayText: '仅粘贴的图片'
      }
    },
    collectAttachmentUsedByMultipleNotesMode: {
      cancel: {
        description: '取消附件收集。',
        displayText: '取消'
      },
      copy: {
        description: '将附件复制到新位置。',
        displayText: '复制'
      },
      move: {
        description: '将附件移动到新位置。',
        displayText: '移动'
      },
      prompt: {
        description: '提示用户选择操作。',
        displayText: '提示'
      },
      skip: {
        description: '跳过该附件并继续处理下一个。',
        displayText: '跳过'
      }
    },
    convertImagesToJpegMode: {
      allImages: {
        description: '将所有图片转换为 JPEG。',
        displayText: '所有图片'
      },
      allImagesExceptAlreadyJpeg: {
        description: '转换除 JPEG 文件以外的所有图片。',
        displayText: '除 JPEG 外的所有图片'
      },
      none: {
        description: '不将图片转换为 JPEG。',
        displayText: '不转换'
      },
      onlyPastedClipboardPngImages: {
        description: '仅将从剪贴板粘贴的 PNG 图片转换为 JPEG。',
        displayText: '仅粘贴的剪贴板 PNG 图片'
      }
    },
    defaultImageSizeDimension: {
      height: '高度',
      width: '宽度'
    },
    emptyFolderBehavior: {
      delete: {
        description: '删除空文件夹。',
        displayText: '删除'
      },
      deleteWithEmptyParents: {
        description: '删除空文件夹及其空的父文件夹。',
        displayText: '同时删除空的父文件夹'
      },
      keep: {
        description: '保留空文件夹。',
        displayText: '保留'
      }
    },
    moveAttachmentToProperFolderUsedByMultipleNotesMode: {
      cancel: {
        description: '取消附件整理。',
        displayText: '取消'
      },
      copyAll: {
        description: '为所有引用笔记将附件复制到新位置。',
        displayText: '全部复制'
      },
      prompt: {
        description: '提示用户选择操作。',
        displayText: '提示'
      },
      skip: {
        description: '跳过该附件并继续处理下一个。',
        displayText: '跳过'
      }
    }
  },
  pluginSettingsManager: {
    customToken: {
      codeComment: '// 自定义令牌已被注释，因为它们需要更新为插件 9.0.0 引入的新格式。\n// 更多信息请参阅文档 (https://github.com/mnaoumov/obsidian-custom-attachment-location?tab=readme-ov-file#custom-tokens)。',
      deprecated: {
        part1: '自定义令牌的注册格式已更改，请相应更新。请参阅',
        part2: '文档',
        part3: '了解更多信息'
      }
    },
    legacyRenameAttachmentsToLowerCase: {
      part1: '',
      part2: '设置已弃用，请改用',
      part3: '格式。请参阅',
      part4: '文档',
      part5: '了解更多信息'
    },
    markdownUrlFormat: {
      deprecated: {
        part1: '',
        part2: '格式可能设置有误。请参阅',
        part3: '文档',
        part4: '了解更多信息',
        part5: '此消息不会再次显示。'
      }
    },
    specialCharacters: {
      part1: '',
      part2: '的默认值已更改，你的设置已更新为新的默认值。'
    },
    validation: {
      defaultImageSizeMustBePercentageOrPixels: '默认图片大小必须使用像素或百分比',
      invalidCustomTokensCode: '自定义令牌代码无效',
      invalidRegularExpression: '正则表达式 {{regExp}} 无效',
      specialCharactersMustNotContainSlash: '特殊字符不能包含 /',
      specialCharactersReplacementMustNotContainInvalidFileNamePathCharacters: '特殊字符替换值不能包含无效的文件名或路径字符。'
    }
  },
  pluginSettingsTab: {
    attachmentRenameMode: {
      description: {
        part1: '添加附件时：'
      },
      name: '附件重命名模式'
    },
    collectAttachmentUsedByMultipleNotesMode: {
      description: {
        part1: '当收集的附件被多个笔记使用时：'
      },
      name: '多笔记共用附件的收集模式'
    },
    collectedAttachmentFileName: {
      description: {
        part1: '查看可用',
        part2: '令牌',
        part3: '留空则改用',
        part4: '设置。'
      },
      name: '收集后的附件文件名'
    },
    convertImagesToJpegMode: {
      description: {
        part1: '选择要转换为 JPEG 的图片：'
      },
      name: '图片转换为 JPEG 的模式'
    },
    customTokens: {
      description: {
        part1: '要使用的自定义令牌。',
        part2: '请参阅',
        part3: '文档',
        part4: '了解更多信息。',
        part5: '⚠️ 自定义令牌可以包含任意 JavaScript 代码，编写不当可能导致数据丢失，请自行承担风险。'
      },
      name: '自定义令牌'
    },
    defaultImageSize: {
      description: {
        part1: '默认图片大小。',
        part2: '可以使用像素',
        part3: '或原图大小的百分比',
        part4: '留空则使用原始图片大小。'
      },
      name: '默认图片大小'
    },
    downloadNetworkImages: {
      description: '收集附件时，自动下载 Markdown 中引用的网络图片并保存到本地。',
      name: '下载网络图片'
    },
    duplicateNameSeparator: {
      description: {
        part1: '粘贴或拖入与现有文件同名的文件时，在文件名中加入此分隔符。',
        part2: '例如拖入文件',
        part3: '时，它会被重命名为',
        part4: '，依此类推，直到找到可用名称。'
      },
      name: '重名分隔符'
    },
    emptyFolderBehavior: {
      description: {
        part1: '文件夹变为空时：'
      },
      name: '空文件夹处理方式'
    },
    excludePaths: {
      description: {
        part1: '排除以下路径中的笔记。',
        part2: '每行输入一个路径。',
        part3: '可以使用路径字符串或',
        part4: '留空则不排除任何笔记。'
      },
      name: '排除路径'
    },
    excludePathsFromAttachmentCollecting: {
      description: {
        part1: '执行',
        part2: '收集附件',
        part3: '命令时，排除以下路径中的附件。',
        part4: '每行输入一个路径。',
        part5: '可以使用路径字符串或',
        part6: '留空则不排除任何路径。'
      },
      name: '附件收集排除路径'
    },
    generatedAttachmentFileName: {
      description: {
        part1: '查看可用',
        part2: '令牌'
      },
      name: '新附件文件名'
    },
    groups: {
      advanced: '高级',
      collectedAttachments: '已收集的附件',
      core: '核心',
      customTokens: '自定义令牌',
      deletion: '删除',
      images: '图片',
      moveRenames: '移动与重命名',
      path: '路径',
      specialCharacters: '特殊字符'
    },
    includePaths: {
      description: {
        part1: '包含以下路径中的笔记。',
        part2: '每行输入一个路径。',
        part3: '可以使用路径字符串或',
        part4: '留空则包含所有笔记。'
      },
      name: '包含路径'
    },
    jpegQuality: {
      description: '质量越低，压缩率越高。',
      name: 'JPEG 质量'
    },
    locationForNewAttachments: {
      description: {
        part1: '以',
        part2: '开头表示相对于笔记所在文件夹的路径。',
        part3: '查看可用',
        part4: '令牌',
        part5: '不建议使用类似',
        part6: '的点文件夹，因为 Obsidian 不会跟踪它们。可能需要使用',
        part7: '插件进行管理。'
      },
      name: '新附件存放位置'
    },
    markdownUrlFormat: {
      description: {
        part1: '插入 Markdown 的 URL 格式。',
        part2: '查看可用',
        part3: '令牌',
        part4: '留空则使用默认格式。'
      },
      name: 'Markdown URL 格式'
    },
    moveAttachmentToProperFolderUsedByMultipleNotesMode: {
      description: {
        part1: '当附件被多个笔记使用时：'
      },
      name: '移动多笔记共用附件时的处理模式'
    },
    networkImageDownloadTimeoutInSeconds: {
      description: '下载每张网络图片的超时时间。',
      name: '网络图片下载超时（秒）'
    },
    renameAttachmentsToLowerCase: '将附件名转换为小写',
    renamedAttachmentFileName: {
      description: {
        part1: '查看可用',
        part2: '令牌',
        part3: '留空则改用',
        part4: '设置。'
      },
      name: '重命名后的附件文件名'
    },
    resetToSampleCustomTokens: {
      message: '确定要将自定义令牌重置为示例吗？你的更改将会丢失。',
      title: '重置为示例自定义令牌'
    },
    shouldConvertPastedImagesToJpeg: {
      description: '是否将直接从剪贴板粘贴的 PNG 图片转换为 JPEG，通常用于截图。',
      name: '将粘贴的图片转换为 JPEG'
    },
    shouldDeleteOrphanAttachments: {
      description: '启用后，删除笔记时也会删除其孤立附件。',
      name: '删除孤立附件'
    },
    shouldHandleRenames: {
      description: {
        part1: '是否处理重命名。',
        part2: '如需处理与 Canvas 文件之间的链接，还需安装',
        part3: '插件。'
      },
      name: '处理重命名'
    },
    shouldRenameAttachmentFiles: {
      description: {
        part1: '启用后，笔记重命名或移动时，其附件会按照',
        part2: '设置重命名。'
      },
      name: '重命名附件文件'
    },
    shouldRenameAttachmentFolders: {
      description: '笔记重命名或移动时，是否重命名附件文件夹。',
      name: '重命名附件文件夹'
    },
    shouldRenameCollectedAttachments: {
      description: {
        part1: '启用后，通过',
        part2: '收集附件',
        part3: '命令处理的附件会按照',
        part4: '设置重命名。'
      },
      name: '重命名已收集的附件'
    },
    specialCharacters: {
      description: {
        part1: '要替换或删除的附件文件夹名和文件名中的特殊字符。',
        part2: '留空则保留特殊字符。'
      },
      name: '特殊字符'
    },
    specialCharactersReplacement: {
      description: {
        part1: '替换附件文件夹名和文件名中特殊字符的字符串。',
        part2: '留空则删除特殊字符。'
      },
      name: '特殊字符替换值'
    },
    timeoutInSeconds: {
      description: {
        part1: '所有操作的超时时间。',
        part2: '设为',
        part3: '时禁用操作超时。'
      },
      name: '操作超时（秒）'
    },
    treatAsAttachmentExtensions: {
      description: {
        part1: '将这些扩展名的文件视为附件。',
        part2: '默认情况下，',
        part3: '和',
        part4: '链接文件不被视为附件，也不会随笔记移动。',
        part5: '可以添加自定义扩展名（例如',
        part6: '）来覆盖此行为。',
        part7: '每行输入一个扩展名。'
      },
      name: '视为附件的扩展名'
    }
  },
  promptWithPreviewModal: {
    previewModal: {
      title: '预览附件文件 \'{{fullFileName}}\''
    },
    title: '请输入提示令牌的值'
  },
  regularExpression: '/正则表达式/',
  releaseNotes: {
    title: '发行说明',
    versionMismatch: {
      part1: '设置文件 ',
      part2: '的版本为',
      part3: '，高于当前插件版本',
      part4: '。插件可能无法按预期工作。请将插件更新到最新版本，或确认设置正确。',
      title: '版本不匹配'
    },
    versions: {
      '10.0.0': {
        part1: '令牌格式已更改，请相应更新。请参阅',
        part2: '文档',
        part3: '了解更多信息。'
      },
      '11.0.0': {
        part1: '读取附件内容的自定义令牌必须更新。同步',
        part2: '属性已替换为延迟加载的',
        part3: '方法。请参阅',
        part4: '文档',
        part5: '了解迁移详情。'
      }
    }
  }
};
