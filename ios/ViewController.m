#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

@interface ViewController : UIViewController <WKNavigationDelegate>
@end

@implementation ViewController
- (void)viewDidLoad{
 [super viewDidLoad];
 WKWebView *wv = [[WKWebView alloc] initWithFrame:self.view.bounds];
 wv.autoresizingMask = UIViewAutoresizingFlexibleWidth|UIViewAutoresizingFlexibleHeight;
 wv.navigationDelegate = self;
 [self.view addSubview:wv];
 NSURL *index = [[NSBundle mainBundle] URLForResource:@"webapp/index" withExtension:@"html"];
 [wv loadFileURL:index allowingReadAccessToURL:index];
}
@end
