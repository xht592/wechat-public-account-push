/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '呆瓜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAHZR7JcQ5o9zZimA0t_urK-Act8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '13JZdlHIGmmHtATo_oD-n3jDzTGaos9rbzf52F-rSro',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '06-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '呆瓜', year: '1990', date: '09-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '03-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-09-11' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAHZR7P8UvNedoi1ikKCfkyb3D1o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '13JZdlHIGmmHtATo_oD-n3jDzTGaos9rbzf52F-rSro',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '06-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '呆瓜', year: '1990', date: '09-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '03-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-09-11' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FQMsPyhghLfahv18VWaSSY1K9jw-39W8k4Nlw9cei38',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAHZR7JcQ5o9zZimA0t_urK-Act8',
    }
  ],

}

module.exports = USER_CONFIG

